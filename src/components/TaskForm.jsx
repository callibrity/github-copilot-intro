import { useState, useEffect } from 'react';
import { formatDateForInput } from '../utils/dateHelpers';
import '../styles/TaskForm.css';

/**
 * TaskForm component
 * Modal form for creating and editing tasks
 * Handles validation and data formatting
 *
 * @param {Object} props
 * @param {Object} props.task - Task to edit (null for new task)
 * @param {Function} props.onSave - Callback when form is saved
 * @param {Function} props.onCancel - Callback when form is cancelled
 * @param {boolean} props.isOpen - Whether modal is open
 */
export default function TaskForm({ task, onSave, onCancel, isOpen }) {
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    category: 'Work',
    status: 'todo',
    dueDate: ''
  });

  const [errors, setErrors] = useState({});

  // Populate form when editing existing task
  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        description: task.description || '',
        priority: task.priority || 'medium',
        category: task.category || 'Work',
        status: task.status || 'todo',
        dueDate: task.dueDate ? formatDateForInput(task.dueDate) : ''
      });
    } else {
      // Reset form for new task
      setFormData({
        title: '',
        description: '',
        priority: 'medium',
        category: 'Work',
        status: 'todo',
        dueDate: ''
      });
    }
    setErrors({});
  }, [task, isOpen]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (formData.title.length > 100) {
      newErrors.title = 'Title must be less than 100 characters';
    }

    if (formData.description.length > 500) {
      newErrors.description = 'Description must be less than 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Prepare task data
    const taskData = {
      ...formData,
      title: formData.title.trim(),
      description: formData.description.trim(),
      dueDate: formData.dueDate ? new Date(formData.dueDate).toISOString() : null
    };

    // Call save callback with task data
    onSave(taskData);
  };

  // Handle cancel
  const handleCancel = () => {
    setErrors({});
    onCancel();
  };

  // Handle click outside modal to close
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      handleCancel();
    }
  };

  // Don't render if not open
  if (!isOpen) return null;

  const isEditing = !!task;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content task-form-modal">
        <div className="modal-header">
          <h2>{isEditing ? 'Edit Task' : 'New Task'}</h2>
          <button
            onClick={handleCancel}
            className="btn-close"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="task-form">
          {/* Title */}
          <div className="form-group">
            <label htmlFor="title" className="form-label required">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`form-input ${errors.title ? 'error' : ''}`}
              placeholder="Enter task title"
              autoFocus
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`form-input form-textarea ${errors.description ? 'error' : ''}`}
              placeholder="Enter task description"
              rows="3"
            />
            {errors.description && (
              <span className="error-message">{errors.description}</span>
            )}
          </div>

          {/* Priority and Category row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="priority" className="form-label">
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="form-select"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-select"
              >
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Shopping">Shopping</option>
                <option value="Health">Health</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Status and Due Date row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-select"
              >
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dueDate" className="form-label">
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          {/* Form actions */}
          <div className="form-actions">
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {isEditing ? 'Save Changes' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
