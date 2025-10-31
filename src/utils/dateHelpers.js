/**
 * Date utility functions for task management
 * Handles date formatting, comparison, and categorization
 */

/**
 * Format a date object to a readable string
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
  if (!date) return 'No due date';

  const dateObj = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) return 'Invalid date';

  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return dateObj.toLocaleDateString('en-US', options);
}

/**
 * Format date to ISO string for input fields
 * @param {Date|string} date - Date to format
 * @returns {string} ISO date string (YYYY-MM-DD)
 */
export function formatDateForInput(date) {
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) return '';

  return dateObj.toISOString().split('T')[0];
}

/**
 * Get relative time description (e.g., "Today", "Tomorrow", "2 days ago")
 * @param {Date|string} date - Date to compare
 * @returns {string} Relative time description
 */
export function getRelativeTime(date) {
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();

  // Strip time component for day comparison
  const dateOnly = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
  const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const diffTime = dateOnly - todayOnly;
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays === -1) return 'Yesterday';
  if (diffDays > 1) return `In ${diffDays} days`;
  if (diffDays < -1) return `${Math.abs(diffDays)} days ago`;

  return '';
}

/**
 * Check if a date is overdue (past today)
 * BUG: This uses > instead of >= for today comparison
 * Tasks due TODAY will incorrectly show as overdue!
 * @param {Date|string} date - Date to check
 * @returns {boolean} True if overdue
 */
export function isOverdue(date) {
  if (!date) return false;

  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();

  // BUG: Using full timestamp comparison instead of date-only comparison
  // This means a task due "today" at 8am will show overdue if checked at 9am
  return dateObj > today;  // Should strip time component first!
}

/**
 * Check if a date is within the next N days
 * @param {Date|string} date - Date to check
 * @param {number} days - Number of days to look ahead
 * @returns {boolean} True if within range
 */
export function isWithinDays(date, days) {
  if (!date) return false;

  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + days);

  return dateObj >= today && dateObj <= futureDate;
}

/**
 * Sort comparison function for dates
 * Handles null/undefined dates by placing them at the end
 * @param {Date|string} dateA - First date
 * @param {Date|string} dateB - Second date
 * @returns {number} Comparison result
 */
export function compareDates(dateA, dateB) {
  // Null dates go to the end
  if (!dateA && !dateB) return 0;
  if (!dateA) return 1;
  if (!dateB) return -1;

  const dateObjA = typeof dateA === 'string' ? new Date(dateA) : dateA;
  const dateObjB = typeof dateB === 'string' ? new Date(dateB) : dateB;

  return dateObjA - dateObjB;
}

/**
 * Parse a date string from an input field
 * @param {string} dateString - Date string to parse
 * @returns {Date|null} Parsed date or null
 */
export function parseDateInput(dateString) {
  if (!dateString) return null;

  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}
