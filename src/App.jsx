import TaskManager from './components/TaskManager';
import './App.css';

/**
 * Main App component for the AI-Assisted Development Workshop
 * Features a unified task manager application for all three exercises
 */
function App() {
  return (
    <div className="app">
      <TaskManager />

      {/* Workshop Instructions - visible at bottom */}
      <aside className="workshop-info">
        <details>
          <summary>📚 Workshop Exercises</summary>
          <div className="exercise-list">
            <div className="exercise-item">
              <h3>Exercise 1: Understanding Existing Code (15 min)</h3>
              <p>Use AI to explore and understand this task manager application:</p>
              <ul>
                <li>How does the <code>useTasks</code> hook manage state?</li>
                <li>How does the TaskBoard organize tasks into columns?</li>
                <li>What props does TaskCard accept and how are they used?</li>
                <li>Trace the data flow when marking a task as complete</li>
                <li>How do the utility functions in <code>taskFilters.js</code> work?</li>
              </ul>
            </div>

            <div className="exercise-item">
              <h3>Exercise 2: Adding New Features (25 min)</h3>
              <p>Choose 2-3 features to add with AI assistance:</p>
              <ul>
                <li><strong>Search:</strong> Enhance the search to filter by tags or advanced criteria</li>
                <li><strong>Filters:</strong> Add priority and category filter checkboxes</li>
                <li><strong>Statistics:</strong> Add charts or enhanced stats dashboard</li>
                <li><strong>Bulk Actions:</strong> Select multiple tasks for batch operations</li>
                <li><strong>Dark Mode:</strong> Add a theme toggle</li>
              </ul>
            </div>

            <div className="exercise-item">
              <h3>Exercise 3: Debugging (20 min)</h3>
              <p>There are 3 intentional bugs in this application. Use AI to find and fix them:</p>
              <ul>
                <li>🐛 <strong>Bug 1:</strong> Tasks don't persist when you refresh the page</li>
                <li>🐛 <strong>Bug 2:</strong> Tasks due today show as "Overdue"</li>
                <li>🐛 <strong>Bug 3:</strong> Sorting by due date doesn't work correctly</li>
              </ul>
              <p><strong>Tip:</strong> Describe the symptoms to your AI assistant and share the relevant code!</p>
            </div>
          </div>
        </details>
      </aside>
    </div>
  );
}

export default App;
