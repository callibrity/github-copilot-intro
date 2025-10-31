import { formatDate, getRelativeTime, isOverdue } from '../utils/dateHelpers';
import '../styles/TaskCard.css';

/**
 * Priority badge component
 * Displays colored badge based on task priority
 */
function PriorityBadge({ priority }) {
  if (!priority || priority === 'none') return null;

  const priorityClass = `priority-badge priority-${priority}`;

  return (
    <span className={priorityClass}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </span>
  );
}

/**
 * Due date display component
 * Shows due date with relative time and overdue indicator
 */
function DueDateDisplay({ dueDate, status }) {
  if (!dueDate) return null;

  const overdue = status !== 'done' && isOverdue(dueDate);
  const relativeTime = getRelativeTime(dueDate);
  const formattedDate = formatDate(dueDate);

  return (
    <div className={`due-date ${overdue ? 'overdue' : ''}`}>
      <span className="due-date-icon">📅</span>
      <span className="due-date-text">
        {formattedDate}
        {relativeTime && <span className="relative-time"> ({relativeTime})</span>}
      </span>
      {overdue && <span className="overdue-badge">Overdue!</span>}
    </div>
  );
}

/**
 * Category badge component
 */
function CategoryBadge({ category }) {
  if (!category) return null;

  return <span className="category-badge">{category}</span>;
}

/**
 * TaskCard component
 * Displays a single task with all its information
 * Used in both board and list views
 *
 * @param {Object} props
 * @param {Object} props.task - Task object to display
 * @param {Function} props.onEdit - Callback when edit button clicked
 * @param {Function} props.onDelete - Callback when delete button clicked
 * @param {Function} props.onStatusChange - Callback when status changes
 * @param {Function} props.onToggleComplete - Callback when complete checkbox toggled
 * @param {boolean} props.compact - Use compact layout (for list view)
 */
export default function TaskCard({
  task,
  onEdit,
  onDelete,
  onStatusChange,
  onToggleComplete,
  compact = false
}) {
  const isComplete = task.status === 'done';

  const handleStatusChange = (e) => {
    if (onStatusChange) {
      onStatusChange(task.id, e.target.value);
    }
  };

  const handleToggleComplete = () => {
    if (onToggleComplete) {
      onToggleComplete(task.id);
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(task);
    }
  };

  const handleDelete = () => {
    if (onDelete && window.confirm(`Delete task "${task.title}"?`)) {
      onDelete(task.id);
    }
  };

  const cardClass = `task-card ${compact ? 'compact' : ''} ${isComplete ? 'completed' : ''} priority-${task.priority}`;

  return (
    <div className={cardClass}>
      {/* Header with checkbox and title */}
      <div className="task-card-header">
        <input
          type="checkbox"
          checked={isComplete}
          onChange={handleToggleComplete}
          className="task-checkbox"
          aria-label={`Mark ${task.title} as ${isComplete ? 'incomplete' : 'complete'}`}
        />
        <h3 className={`task-title ${isComplete ? 'strikethrough' : ''}`}>
          {task.title}
        </h3>
        <div className="task-actions">
          <button
            onClick={handleEdit}
            className="btn-icon btn-edit"
            aria-label="Edit task"
            title="Edit"
          >
            ✏️
          </button>
          <button
            onClick={handleDelete}
            className="btn-icon btn-delete"
            aria-label="Delete task"
            title="Delete"
          >
            🗑️
          </button>
        </div>
      </div>

      {/* Description */}
      {task.description && !compact && (
        <p className="task-description">{task.description}</p>
      )}

      {/* Metadata row */}
      <div className="task-metadata">
        <div className="task-badges">
          <PriorityBadge priority={task.priority} />
          <CategoryBadge category={task.category} />
        </div>
        <DueDateDisplay dueDate={task.dueDate} status={task.status} />
      </div>

      {/* Status selector */}
      {!compact && (
        <div className="task-status-row">
          <label htmlFor={`status-${task.id}`} className="status-label">
            Status:
          </label>
          <select
            id={`status-${task.id}`}
            value={task.status}
            onChange={handleStatusChange}
            className={`status-select status-${task.status}`}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
      )}
    </div>
  );
}
