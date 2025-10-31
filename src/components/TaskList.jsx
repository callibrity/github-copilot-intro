import { useState } from 'react';
import TaskCard from './TaskCard';
import {
  sortByPriority,
  sortByDueDate,
  sortByTitle,
  sortByCreatedDate
} from '../utils/taskFilters';
import '../styles/TaskList.css';

/**
 * Sort control component
 * Allows users to choose sort field and direction
 */
function SortControls({ sortBy, sortDirection, onSortChange }) {
  const handleSortFieldChange = (e) => {
    onSortChange(e.target.value, sortDirection);
  };

  const toggleDirection = () => {
    onSortChange(sortBy, sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="sort-controls">
      <label htmlFor="sort-by" className="sort-label">
        Sort by:
      </label>
      <select
        id="sort-by"
        value={sortBy}
        onChange={handleSortFieldChange}
        className="sort-select"
      >
        <option value="created">Created Date</option>
        <option value="dueDate">Due Date</option>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
      <button
        onClick={toggleDirection}
        className="btn-icon sort-direction"
        title={sortDirection === 'asc' ? 'Ascending' : 'Descending'}
        aria-label="Toggle sort direction"
      >
        {sortDirection === 'asc' ? '↑' : '↓'}
      </button>
    </div>
  );
}

/**
 * TaskList component
 * Displays tasks in a sortable list view
 * Provides sorting options and compact card display
 *
 * @param {Object} props
 * @param {Array} props.tasks - Array of tasks to display
 * @param {Function} props.onEdit - Callback when edit button clicked
 * @param {Function} props.onDelete - Callback when delete button clicked
 * @param {Function} props.onStatusChange - Callback when status changes
 * @param {Function} props.onToggleComplete - Callback when complete checkbox toggled
 */
export default function TaskList({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
  onToggleComplete
}) {
  const [sortBy, setSortBy] = useState('created');
  const [sortDirection, setSortDirection] = useState('desc');

  // Handle sort changes
  const handleSortChange = (field, direction) => {
    setSortBy(field);
    setSortDirection(direction);
  };

  // Apply sorting to tasks
  const getSortedTasks = () => {
    const ascending = sortDirection === 'asc';

    switch (sortBy) {
      case 'priority':
        return sortByPriority(tasks, ascending);
      case 'dueDate':
        // BUG: This will use the buggy sortByDueDate function
        return sortByDueDate(tasks, ascending);
      case 'title':
        return sortByTitle(tasks, ascending);
      case 'created':
      default:
        return sortByCreatedDate(tasks, ascending);
    }
  };

  const sortedTasks = getSortedTasks();

  return (
    <div className="task-list">
      {/* List header with sort controls */}
      <div className="list-header">
        <div className="list-info">
          <h3>All Tasks</h3>
          <span className="task-count">{tasks.length} tasks</span>
        </div>
        <SortControls
          sortBy={sortBy}
          sortDirection={sortDirection}
          onSortChange={handleSortChange}
        />
      </div>

      {/* Task list */}
      <div className="list-content">
        {sortedTasks.length === 0 ? (
          <div className="empty-list">
            <p>No tasks to display</p>
            <p className="empty-list-hint">Create a new task to get started!</p>
          </div>
        ) : (
          <div className="task-list-items">
            {sortedTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
                onStatusChange={onStatusChange}
                onToggleComplete={onToggleComplete}
                compact={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
