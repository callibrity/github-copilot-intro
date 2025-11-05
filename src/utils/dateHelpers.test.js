import { describe, it, expect } from 'vitest';
import { formatDate, formatDateForInput, getRelativeTime } from './dateHelpers';

describe('formatDate', () => {
  it('should format a date object to readable string', () => {
    const date = new Date('2024-03-15T12:00:00');
    const result = formatDate(date);
    expect(result).toBe('Mar 15, 2024');
  });

  it('should handle date strings', () => {
    const result = formatDate('2024-03-15T12:00:00');
    expect(result).toBe('Mar 15, 2024');
  });

  it('should return "No due date" for null', () => {
    expect(formatDate(null)).toBe('No due date');
  });

  it('should return "Invalid date" for invalid input', () => {
    expect(formatDate('not-a-date')).toBe('Invalid date');
  });
});

describe('formatDateForInput', () => {
  it('should format date to YYYY-MM-DD', () => {
    const date = new Date('2024-03-15T10:30:00Z');
    const result = formatDateForInput(date);
    expect(result).toBe('2024-03-15');
  });

  it('should handle date strings', () => {
    const result = formatDateForInput('2024-03-15');
    expect(result).toBe('2024-03-15');
  });

  it('should return empty string for null', () => {
    expect(formatDateForInput(null)).toBe('');
  });

  it('should return empty string for invalid date', () => {
    expect(formatDateForInput('invalid')).toBe('');
  });
});

describe('getRelativeTime', () => {
  it('should return "Today" for today\'s date', () => {
    const today = new Date();
    expect(getRelativeTime(today)).toBe('Today');
  });

  it('should return "Yesterday" for yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(getRelativeTime(yesterday)).toBe('Yesterday');
  });

  it('should return "Tomorrow" for tomorrow', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(getRelativeTime(tomorrow)).toBe('Tomorrow');
  });

  it('should return "In N days" for future dates', () => {
    const future = new Date();
    future.setDate(future.getDate() + 5);
    expect(getRelativeTime(future)).toBe('In 5 days');
  });

  it('should return "N days ago" for past dates', () => {
    const past = new Date();
    past.setDate(past.getDate() - 3);
    expect(getRelativeTime(past)).toBe('3 days ago');
  });

  it('should return empty string for null', () => {
    expect(getRelativeTime(null)).toBe('');
  });
});
