import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

/**
 * Generate a unique ID for tasks
 * Simple implementation using timestamp and random number
 */
function generateId() {
  return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Sample initial tasks for demonstration
 */
const INITIAL_TASKS = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Draft and submit the Q4 project proposal to the team',
    priority: 'high',
    category: 'Work',
    status: 'in-progress',
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString() // 5 days ago
  },
  {
    id: '2',
    title: 'Review pull requests',
    description: 'Review and approve pending PRs from the team',
    priority: 'medium',
    category: 'Work',
    status: 'todo',
    dueDate: new Date(Date.now()).toISOString(), // Today - will trigger overdue bug!
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '3',
    title: 'Buy groceries',
    description: 'Milk, eggs, bread, coffee',
    priority: 'low',
    category: 'Personal',
    status: 'todo',
    dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '4',
    title: 'Schedule dentist appointment',
    description: 'Call Dr. Smith office for regular checkup',
    priority: 'medium',
    category: 'Personal',
    status: 'todo',
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '5',
    title: 'Update documentation',
    description: 'Add API documentation for new endpoints',
    priority: 'high',
    category: 'Work',
    status: 'done',
    dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // Yesterday
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '6',
    title: 'Plan weekend trip',
    description: 'Research hotels and activities for the weekend getaway',
    priority: 'low',
    category: 'Personal',
    status: 'in-progress',
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '7',
    title: 'Fix login bug',
    description: 'Users reporting issues with password reset flow',
    priority: 'high',
    category: 'Work',
    status: 'todo',
    dueDate: new Date(Date.now()).toISOString(), // Today - another overdue bug trigger
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '8',
    title: 'Organize garage',
    description: 'Sort through boxes and donate unused items',
    priority: 'low',
    category: 'Personal',
    status: 'todo',
    dueDate: null, // No due date
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '9',
    title: 'Prepare tax documents',
    description: 'Gather receipts and forms for tax filing',
    priority: 'high',
    category: 'Personal',
    status: 'todo',
    dueDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days out
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '10',
    title: 'Team standup',
    description: 'Daily team sync meeting',
    priority: 'medium',
    category: 'Work',
    status: 'todo',
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days out
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  }
];

/**
 * Custom hook for managing tasks
 * Provides CRUD operations and state management for tasks
 *
 * @returns {Object} Task management functions and state
 */
export function useTasks() {
  // Use localStorage to persist tasks
  const [tasks, setTasks] = useLocalStorage('tasks', INITIAL_TASKS);

  /**
   * Add a new task
   * @param {Object} taskData - Task data without id and timestamps
   * @returns {Object} The created task
   */
  const addTask = useCallback((taskData) => {
    const newTask = {
      ...taskData,
      id: generateId(),
      createdAt: new Date().toISOString(),
      status: taskData.status || 'todo'
    };

    // Add the new task and save to localStorage
    tasks.push(newTask);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));

    return newTask;
  }, [tasks]);

  /**
   * Update an existing task
   * @param {string} id - Task ID to update
   * @param {Object} updates - Fields to update
   * @returns {Object|null} Updated task or null if not found
   */
  const updateTask = useCallback((id, updates) => {
    let updatedTask = null;

    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id) {
          // Create a new object to ensure React detects the change
          // This is important for proper re-rendering
          updatedTask = { ...task, ...updates };
          return updatedTask;
        }
        return task;
      });
    });

    return updatedTask;
  }, [setTasks]);

  /**
   * Delete a task
   * @param {string} id - Task ID to delete
   * @returns {boolean} True if task was deleted
   */
  const deleteTask = useCallback((id) => {
    let wasDeleted = false;

    setTasks(prevTasks => {
      const newTasks = prevTasks.filter(task => task.id !== id);
      wasDeleted = newTasks.length < prevTasks.length;
      return newTasks;
    });

    return wasDeleted;
  }, [setTasks]);

  /**
   * Toggle task completion status
   * Moves between 'done' and the task's previous status
   * @param {string} id - Task ID
   */
  const toggleTaskComplete = useCallback((id) => {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            status: task.status === 'done' ? 'todo' : 'done'
          };
        }
        return task;
      });
    });
  }, [setTasks]);

  /**
   * Update task status
   * @param {string} id - Task ID
   * @param {string} status - New status ('todo', 'in-progress', 'done')
   */
  const updateTaskStatus = useCallback((id, status) => {
    return updateTask(id, { status });
  }, [updateTask]);

  /**
   * Get a single task by ID
   * @param {string} id - Task ID
   * @returns {Object|undefined} Task object or undefined
   */
  const getTask = useCallback((id) => {
    return tasks.find(task => task.id === id);
  }, [tasks]);

  /**
   * Clear all tasks
   */
  const clearAllTasks = useCallback(() => {
    setTasks([]);
  }, [setTasks]);

  /**
   * Reset to initial sample tasks
   */
  const resetTasks = useCallback(() => {
    setTasks(INITIAL_TASKS);
  }, [setTasks]);

  return {
    // State
    tasks,

    // CRUD operations
    addTask,
    updateTask,
    deleteTask,
    getTask,

    // Convenience methods
    toggleTaskComplete,
    updateTaskStatus,
    clearAllTasks,
    resetTasks
  };
}
