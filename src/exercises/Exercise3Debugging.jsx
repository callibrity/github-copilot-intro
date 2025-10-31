import { useState } from 'react'
import './Exercise3.css'

// BUG 1: Counter increments by wrong amount
function BuggyCounter() {
  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(1)

  const handleIncrement = () => {
    // BUG: This doesn't work as expected!
    setCount(count + increment)
    setCount(count + increment)
  }

  return (
    <div className="bug-demo">
      <h3>Bug #1: Counter Problem</h3>
      <p className="bug-description">
        The counter should increment by 2x the increment value when you click the button,
        but it's not working correctly. Can you find and fix the bug?
      </p>

      <div className="counter-display">
        <div className="count-value">{count}</div>
        <div className="count-label">Current Count</div>
      </div>

      <div className="counter-controls">
        <label>
          Increment by:
          <input
            type="number"
            value={increment}
            onChange={(e) => setIncrement(Number(e.target.value))}
            min="1"
          />
        </label>
        <button onClick={handleIncrement} className="primary-button">
          Add {increment * 2}
        </button>
      </div>
    </div>
  )
}

// BUG 2: Form submission issue
function BuggyForm() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulate submission
    console.log('Submitting:', formData)

    setSubmitted(true)
    setFormData({ name: '', email: '' })
    // BUG: The success message flashes then disappears!
    setTimeout(() => setSubmitted(false), 0)
  }

  if (submitted) {
    return (
      <div className="success-message">
        ✅ Form submitted successfully!
      </div>
    )
  }

  return (
    <div className="bug-demo">
      <h3>Bug #2: Form Submission Problem</h3>
      <p className="bug-description">
        Try to fill out the form completely. You'll notice something wrong
        when typing. Then try submitting - the success message flashes and disappears!
      </p>

      <form onSubmit={handleSubmit} className="demo-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ email: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="primary-button">
          Submit
        </button>
      </form>
    </div>
  )
}

// BUG 3: List doesn't update
function BuggyTodoList() {
  const [todos, setTodos] = useState(['Buy groceries', 'Walk the dog'])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim()) {
      // BUG: Todo gets added but the list doesn't update visually!
      todos.push(newTodo)
      // Don't clear input - this way the mutation bug is more obvious
    }
  }

  const removeTodo = (index) => {
    // BUG: This also doesn't work!
    todos.splice(index, 1)
  }

  return (
    <div className="bug-demo">
      <h3>Bug #3: List Not Updating</h3>
      <p className="bug-description">
        Adding and removing todos doesn't update the display.
        The console shows the array changes but React doesn't re-render. Why?
      </p>

      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo} className="primary-button">
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="debug-info">
        <strong>Debug:</strong> Todos array length: {todos.length}
      </div>
    </div>
  )
}

export default function Exercise3Debugging() {
  return (
    <div className="exercise-section">
      <h2>Exercise 3: Debugging</h2>

      <div className="instructions">
        <h3>Your Task:</h3>
        <ul>
          <li>Open this file: <code>src/exercises/Exercise3Debugging.jsx</code></li>
          <li>There are 3 bugs in the components below</li>
          <li>Use your AI assistant to identify and fix each bug</li>
          <li>Try to interact with each demo to see the bug in action</li>
          <li>After fixing, verify the components work correctly</li>
        </ul>

        <h3>Tips for Debugging with AI:</h3>
        <ul>
          <li>Describe what you <em>expect</em> vs what <em>actually happens</em></li>
          <li>Show the AI the specific component or function with the bug</li>
          <li>Ask the AI to explain why the bug occurs</li>
          <li>Request both an explanation and a fix</li>
        </ul>

        <h3>Example Prompts to Try:</h3>
        <ul>
          <li>"The counter increments by the wrong amount. Here's the code... What's wrong?"</li>
          <li>"Why does the success message disappear after form submission?"</li>
          <li>"The todo list array updates but React doesn't re-render. Why?"</li>
          <li>"How should I fix the state mutation in the todo list?"</li>
        </ul>
      </div>

      <div className="bugs-container">
        <BuggyCounter />
        <BuggyForm />
        <BuggyTodoList />
      </div>
    </div>
  )
}
