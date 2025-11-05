/**
 * Task filtering and sorting utilities
 * Used throughout the app to filter, sort, and organize tasks
 */

import { isOverdue, compareDates } from './dateHelpers.js';

/**
 * Priority levels with their display order
 */
export const PRIORITY_ORDER = {
  high: 3,
  medium: 2,
  low: 1,
  none: 0
};

/**
 * Task status types
 */
export const STATUS_TYPES = {
  TODO: 'todo',
  IN_PROGRESS: 'in-progress',
  DONE: 'done'
};

/**
 * Filter tasks by search query (title and description)
 * @param {Array} tasks - Array of task objects
 * @param {string} query - Search query string
 * @returns {Array} Filtered tasks
 */
export function filterBySearch(tasks, query) {
  if (!query || query.trim() === '') return tasks;

  const lowerQuery = query.toLowerCase().trim();

  return tasks.filter(task => {
    const titleMatch = task.title?.toLowerCase().includes(lowerQuery);
    const descriptionMatch = task.description?.toLowerCase().includes(lowerQuery);
    return titleMatch || descriptionMatch;
  });
}

/**
 * Filter tasks by status
 * @param {Array} tasks - Array of task objects
 * @param {string} status - Status to filter by
 * @returns {Array} Filtered tasks
 */
export function filterByStatus(tasks, status) {
  if (!status) return tasks;
  return tasks.filter(task => task.status === status);
}

/**
 * Filter tasks by priority level
 * @param {Array} tasks - Array of task objects
 * @param {Array} priorities - Array of priority levels to include
 * @returns {Array} Filtered tasks
 */
export function filterByPriority(tasks, priorities) {
  if (!priorities || priorities.length === 0) return tasks;
  return tasks.filter(task => priorities.includes(task.priority));
}

/**
 * Filter tasks by category
 * @param {Array} tasks - Array of task objects
 * @param {Array} categories - Array of categories to include
 * @returns {Array} Filtered tasks
 */
export function filterByCategory(tasks, categories) {
  if (!categories || categories.length === 0) return tasks;
  return tasks.filter(task => categories.includes(task.category));
}

/**
 * Filter tasks to show only overdue ones
 * @param {Array} tasks - Array of task objects
 * @returns {Array} Filtered tasks
 */
export function filterOverdue(tasks) {
  return tasks.filter(task => task.dueDate && isOverdue(task.dueDate));
}

/**
 * Apply multiple filters to tasks
 * This is the main filtering function that combines all filter types
 *
 * @param {Array} tasks - Array of task objects
 * @param {Object} filters - Filter configuration object
 * @param {string} filters.search - Search query
 * @param {Array} filters.priorities - Priority levels to include
 * @param {Array} filters.categories - Categories to include
 * @param {string} filters.status - Status to filter by
 * @param {boolean} filters.showOverdueOnly - Show only overdue tasks
 * @returns {Array} Filtered tasks
 */
export function applyFilters(tasks, filters = {}) {
  let filtered = [...tasks];

  if (filters.search) {
    filtered = filterBySearch(filtered, filters.search);
  }

  if (filters.status) {
    filtered = filterByStatus(filtered, filters.status);
  }

  if (filters.priorities && filters.priorities.length > 0) {
    filtered = filterByPriority(filtered, filters.priorities);
  }

  if (filters.categories && filters.categories.length > 0) {
    filtered = filterByCategory(filtered, filters.categories);
  }

  if (filters.showOverdueOnly) {
    filtered = filterOverdue(filtered);
  }

  return filtered;
}

/**
 * Sort tasks by priority (high to low)
 * @param {Array} tasks - Array of task objects
 * @param {boolean} ascending - Sort order (true for low to high)
 * @returns {Array} Sorted tasks
 */
export function sortByPriority(tasks, ascending = false) {
  return [...tasks].sort((a, b) => {
    const priorityA = PRIORITY_ORDER[a.priority] || 0;
    const priorityB = PRIORITY_ORDER[b.priority] || 0;
    return ascending ? priorityA - priorityB : priorityB - priorityA;
  });
}

/**
 * Sort tasks by due date
 * @param {Array} tasks - Array of task objects
 * @param {boolean} ascending - Sort order (true for earliest first)
 * @returns {Array} Sorted tasks
 */
export function sortByDueDate(tasks, ascending = true) {
  return [...tasks].sort((a, b) => {
    const comparison = ascending
      ? (a.dueDate > b.dueDate ? 1 : -1)
      : (a.dueDate < b.dueDate ? 1 : -1);

    return comparison;
  });
}

/**
 * Sort tasks by title (alphabetically)
 * @param {Array} tasks - Array of task objects
 * @param {boolean} ascending - Sort order (true for A-Z)
 * @returns {Array} Sorted tasks
 */
export function sortByTitle(tasks, ascending = true) {
  return [...tasks].sort((a, b) => {
    const titleA = (a.title || '').toLowerCase();
    const titleB = (b.title || '').toLowerCase();
    return ascending
      ? titleA.localeCompare(titleB)
      : titleB.localeCompare(titleA);
  });
}

/**
 * Sort tasks by creation date
 * @param {Array} tasks - Array of task objects
 * @param {boolean} ascending - Sort order (true for oldest first)
 * @returns {Array} Sorted tasks
 */
export function sortByCreatedDate(tasks, ascending = false) {
  return [...tasks].sort((a, b) => {
    return ascending
      ? compareDates(a.createdAt, b.createdAt)
      : compareDates(b.createdAt, a.createdAt);
  });
}

/**
 * Group tasks by their status
 * Returns an object with status keys and arrays of tasks as values
 * @param {Array} tasks - Array of task objects
 * @returns {Object} Tasks grouped by status
 */
export function groupByStatus(tasks) {
  return tasks.reduce((groups, task) => {
    const status = task.status || STATUS_TYPES.TODO;
    if (!groups[status]) {
      groups[status] = [];
    }
    groups[status].push(task);
    return groups;
  }, {});
}

/**
 * Group tasks by category
 * @param {Array} tasks - Array of task objects
 * @returns {Object} Tasks grouped by category
 */
export function groupByCategory(tasks) {
  return tasks.reduce((groups, task) => {
    const category = task.category || 'Uncategorized';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(task);
    return groups;
  }, {});
}

/**
 * Get unique categories from task list
 * @param {Array} tasks - Array of task objects
 * @returns {Array} Array of unique category names
 */
export function getUniqueCategories(tasks) {
  const categories = tasks.map(task => task.category).filter(Boolean);
  return [...new Set(categories)].sort();
}

/**
 * Calculate task statistics
 * @param {Array} tasks - Array of task objects
 * @returns {Object} Statistics object
 */
export function calculateStats(tasks) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === STATUS_TYPES.DONE).length;
  const inProgress = tasks.filter(t => t.status === STATUS_TYPES.IN_PROGRESS).length;
  const todo = tasks.filter(t => t.status === STATUS_TYPES.TODO).length;
  const overdue = tasks.filter(t => t.dueDate && isOverdue(t.dueDate) && t.status !== STATUS_TYPES.DONE).length;

  return {
    total,
    completed,
    inProgress,
    todo,
    overdue,
    completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
  };
}
