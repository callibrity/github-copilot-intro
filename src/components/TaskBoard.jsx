import TaskCard from './TaskCard';
import { groupByStatus, STATUS_TYPES } from '../utils/taskFilters';
import '../styles/TaskBoard.css';

/**
 * Column component for the Kanban board
 * Displays tasks for a specific status
 */
function BoardColumn({ title, status, tasks, onEdit, onDelete, onStatusChange, onToggleComplete, count }) {
  return (
    <div className="board-column">
      <div className="column-header">
        <h3 className="column-title">{title}</h3>
        <span className="task-count">{count}</span>
      </div>
      <div className="column-content">
        {tasks.length === 0 ? (
          <div className="empty-column">
            <p>No tasks</p>
          </div>
        ) : (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
              onToggleComplete={onToggleComplete}
            />
          ))
        )}
      </div>
    </div>
  );
}

/**
 * TaskBoard component
 * Displays tasks in a Kanban-style board with columns for each status
 * Organizes tasks by status (To Do, In Progress, Done)
 *
 * @param {Object} props
 * @param {Array} props.tasks - Array of tasks to display
 * @param {Function} props.onEdit - Callback when edit button clicked
 * @param {Function} props.onDelete - Callback when delete button clicked
 * @param {Function} props.onStatusChange - Callback when status changes
 * @param {Function} props.onToggleComplete - Callback when complete checkbox toggled
 */
export default function TaskBoard({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
  onToggleComplete
}) {
  // Group tasks by status
  const groupedTasks = groupByStatus(tasks);

  // Get tasks for each column
  const todoTasks = groupedTasks[STATUS_TYPES.TODO] || [];
  const inProgressTasks = groupedTasks[STATUS_TYPES.IN_PROGRESS] || [];
  const doneTasks = groupedTasks[STATUS_TYPES.DONE] || [];

  return (
    <div className="task-board">
      <BoardColumn
        title="To Do"
        status={STATUS_TYPES.TODO}
        tasks={todoTasks}
        count={todoTasks.length}
        onEdit={onEdit}
        onDelete={onDelete}
        onStatusChange={onStatusChange}
        onToggleComplete={onToggleComplete}
      />

      <BoardColumn
        title="In Progress"
        status={STATUS_TYPES.IN_PROGRESS}
        tasks={inProgressTasks}
        count={inProgressTasks.length}
        onEdit={onEdit}
        onDelete={onDelete}
        onStatusChange={onStatusChange}
        onToggleComplete={onToggleComplete}
      />

      <BoardColumn
        title="Done"
        status={STATUS_TYPES.DONE}
        tasks={doneTasks}
        count={doneTasks.length}
        onEdit={onEdit}
        onDelete={onDelete}
        onStatusChange={onStatusChange}
        onToggleComplete={onToggleComplete}
      />
    </div>
  );
}
