import { useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskBoard from './TaskBoard';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { applyFilters, calculateStats } from '../utils/taskFilters';
import '../styles/TaskManager.css';

/**
 * View toggle component
 * Switches between board and list views
 */
function ViewToggle({ view, onViewChange }) {
  return (
    <div className="view-toggle">
      <button
        className={`view-btn ${view === 'board' ? 'active' : ''}`}
        onClick={() => onViewChange('board')}
        aria-label="Board view"
      >
        📊 Board
      </button>
      <button
        className={`view-btn ${view === 'list' ? 'active' : ''}`}
        onClick={() => onViewChange('list')}
        aria-label="List view"
      >
        📋 List
      </button>
    </div>
  );
}

/**
 * Statistics panel component
 * Displays task counts and completion rate
 */
function StatsPanel({ stats }) {
  return (
    <div className="stats-panel">
      <div className="stat-item">
        <span className="stat-label">Total</span>
        <span className="stat-value">{stats.total}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">To Do</span>
        <span className="stat-value stat-todo">{stats.todo}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">In Progress</span>
        <span className="stat-value stat-progress">{stats.inProgress}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Done</span>
        <span className="stat-value stat-done">{stats.completed}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Overdue</span>
        <span className="stat-value stat-overdue">{stats.overdue}</span>
      </div>
      <div className="stat-item stat-completion">
        <span className="stat-label">Completion</span>
        <span className="stat-value">{stats.completionRate}%</span>
      </div>
    </div>
  );
}

/**
 * Filter controls component
 * Provides search and filter options
 * This is a placeholder for Exercise 2 - participants will enhance this!
 */
function FilterControls({ filters, onFilterChange }) {
  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  return (
    <div className="filter-controls">
      <input
        type="text"
        placeholder="Search tasks..."
        value={filters.search || ''}
        onChange={handleSearchChange}
        className="search-input"
      />
      {/* Exercise 2: Participants will add more filters here! */}
    </div>
  );
}

/**
 * TaskManager component
 * Main container for the task management application
 * Orchestrates all task operations and view management
 */
export default function TaskManager() {
  // Task state and operations from custom hook
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskComplete,
    updateTaskStatus,
    resetTasks
  } = useTasks();

  // UI state
  const [view, setView] = useState('board'); // 'board' or 'list'
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    priorities: [],
    categories: [],
    status: null,
    showOverdueOnly: false
  });

  // Apply filters to tasks
  const filteredTasks = applyFilters(tasks, filters);

  // Calculate statistics from all tasks (not just filtered)
  const stats = calculateStats(tasks);

  // Form handlers
  const handleNewTask = () => {
    setEditingTask(null);
    setIsFormOpen(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingTask(null);
  };

  const handleSaveTask = (taskData) => {
    if (editingTask) {
      // Update existing task
      updateTask(editingTask.id, taskData);
    } else {
      // Create new task
      addTask(taskData);
    }
    handleCloseForm();
  };

  // Task action handlers
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleToggleComplete = (taskId) => {
    toggleTaskComplete(taskId);
  };

  const handleStatusChange = (taskId, newStatus) => {
    updateTaskStatus(taskId, newStatus);
  };

  // Filter handlers
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Debug helper (for workshop demonstration)
  const handleReset = () => {
    if (window.confirm('Reset to sample tasks? This will delete all current tasks.')) {
      resetTasks();
    }
  };

  return (
    <div className="task-manager">
      {/* Header */}
      <header className="task-manager-header">
        <div className="header-top">
          <h1>Task Manager</h1>
          <div className="header-actions">
            <button onClick={handleReset} className="btn btn-secondary btn-sm">
              Reset Data
            </button>
            <button onClick={handleNewTask} className="btn btn-primary">
              + New Task
            </button>
          </div>
        </div>

        {/* Statistics */}
        <StatsPanel stats={stats} />

        {/* Filters and View Toggle */}
        <div className="controls-row">
          <FilterControls filters={filters} onFilterChange={handleFilterChange} />
          <ViewToggle view={view} onViewChange={setView} />
        </div>
      </header>

      {/* Main content area */}
      <main className="task-manager-content">
        {view === 'board' ? (
          <TaskBoard
            tasks={filteredTasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onStatusChange={handleStatusChange}
            onToggleComplete={handleToggleComplete}
          />
        ) : (
          <TaskList
            tasks={filteredTasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onStatusChange={handleStatusChange}
            onToggleComplete={handleToggleComplete}
          />
        )}
      </main>

      {/* Task Form Modal */}
      <TaskForm
        task={editingTask}
        isOpen={isFormOpen}
        onSave={handleSaveTask}
        onCancel={handleCloseForm}
      />
    </div>
  );
}
