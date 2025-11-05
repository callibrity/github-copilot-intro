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
    </div>
  );
}

export default App;
