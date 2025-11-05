# GitHub Copilot Intro

A hands-on workshop introducing developers to GitHub Copilot's four interaction modes through building features and debugging a real task manager application.

**Duration:** 90 minutes
**Level:** Beginner-friendly
**Tool:** GitHub Copilot (autocomplete, chat, inline chat, @workspace)

---

## 🚀 Quick Start

### Option 1: GitHub Codespaces (Recommended - Zero Install!)

1. Click the green **"Code"** button above
2. Select **"Codespaces"** tab
3. Click **"Create codespace on main"**
4. Wait 2-3 minutes for setup (you'll see a VS Code interface loading in your browser)
5. When ready, **open the terminal**:
   - Look at the bottom of the screen for the Terminal panel
   - Or press **Ctrl+`** (backtick) to toggle it
   - Or use menu: Terminal → New Terminal
6. In the terminal, type: `npm run dev` and press Enter
7. After a few seconds, a notification will pop up saying "Your application running on port 5173 is available"
8. Click **"Open in Browser"** in the notification
9. You'll see the Task Manager app in a new browser tab!

**That's it!** GitHub Copilot is pre-installed and ready to use.

### Option 2: Local Setup

```bash
# Prerequisites: Node.js 18+, VS Code with GitHub Copilot extension

git clone git@github.com:callibrity/github-copilot-intro.git
cd github-copilot-intro
npm install
npm run dev

# Open http://localhost:5173 in your browser
```

---

## 🎯 Workshop Overview

This workshop teaches you to use GitHub Copilot effectively through three hands-on exercises:

1. **Understanding Code** (15 min) - Explore the codebase using Copilot's four modes
2. **Adding Features** (25 min) - Build new functionality with AI assistance
3. **Debugging** (20 min) - Find and fix bugs using Copilot

By the end, you'll know:
- ✅ When to use each of Copilot's four interaction modes
- ✅ How to write effective prompts
- ✅ How to iterate on AI suggestions
- ✅ How to verify AI-generated code
- ✅ Real-world workflows for daily development

---

## 🤖 GitHub Copilot's Four Modes

### Mode 1: 👻 Autocomplete (Ghost Text)

**What it is:** AI suggests code as you type, appearing as gray text

**How to use:**
- Start typing → suggestion appears
- **Tab** - Accept suggestion
- **Ctrl/Cmd+→** - Accept one word
- **Alt/Opt+]** - Next suggestion
- **Alt/Opt+[** - Previous suggestion
- **Esc** - Dismiss

**Best for:** Quick completions, boilerplate, following patterns

**Example:**
```javascript
// Type: function calculateTot
// Copilot suggests: function calculateTotal(items) { ... }
// Press Tab to accept
```

---

### Mode 2: 💬 Chat Mode

**What it is:** Full conversation in a dedicated chat panel

**How to open:**
- **Windows/Linux:** Ctrl+Shift+I
- **Mac:** Cmd+Shift+I
- Or click chat icon in sidebar

**Best for:** Understanding concepts, planning, asking "how" and "why"

**Example prompts:**
```
"How does state management work in this app?"
"What's the best approach for adding filters?"
"@workspace Where are tasks stored?"
```

**Special features:**
- `@workspace` - Ask about entire codebase
- `#file:name.js` - Reference specific files
- `/explain` - Explain code
- `/fix` - Suggest fixes

---

### Mode 3: ✏️ Inline Chat

**What it is:** Chat about selected code without leaving your file

**How to use:**
1. Highlight code
2. Press **Ctrl/Cmd+I**
3. Type your question/request
4. Review and accept changes

**Best for:** Understanding specific functions, modifying code, refactoring

**Commands:**
- `/doc` - Generate documentation
- `/explain` - Explain the code
- `/fix` - Fix problems
- `/tests` - Generate tests

---

### Mode 4: 🤖 Agent Mode (@workspace)

**What it is:** Copilot that understands your entire codebase

**How to use:**
1. Open Chat (Ctrl/Cmd+Shift+I)
2. Start prompt with `@workspace`
3. Copilot searches across files
4. Get context-aware answers

**Best for:** Finding code, understanding architecture, multi-file tasks

**Example:**
```
"@workspace Where are tasks updated when status changes?"
"@workspace Find all date comparison bugs"
```

---

## 📚 Exercise 1: Understanding Existing Code (15 min)

**Goal:** Learn to explore unfamiliar code using Copilot's four modes

### Activity 1A: High-Level Understanding (5 min)
**Use:** 💬 Chat Mode

Open Copilot Chat (Ctrl/Cmd+Shift+I) and ask:

```
"What does this task manager application do?"

"@workspace What's the overall architecture?"

"How is state managed in this app?"

"What React patterns are used here?"

"@workspace Trace the complete data flow when a user clicks the complete checkbox on a task. Show me all the functions involved from the UI click to the state update."
```

### Activity 1B: Understanding Specific Code (7 min)
**Use:** ✏️ Inline Chat Mode

**Task 1: Understand the useTasks hook**
1. Open `src/hooks/useTasks.js`
2. Highlight the entire `useTasks` function
3. Press **Ctrl/Cmd+I**
4. Ask: `"Explain how this custom hook works"`

**Task 2: Understand filtering**
1. Open `src/utils/taskFilters.js`
2. Highlight the `applyFilters` function
3. Press **Ctrl/Cmd+I**
4. Ask: `"How does this filtering work?"`

**Task 3: Understand component props**
1. Open `src/components/TaskCard.jsx`
2. Highlight the function signature
3. Press **Ctrl/Cmd+I**
4. Ask: `"What props does this component accept?"`

**Task 4: Understand React event handler patterns**
1. Open `src/components/TaskManager.jsx`
2. Highlight lines 156-166 (the three handler functions: handleDeleteTask, handleToggleComplete, and handleStatusChange)
3. Press **Ctrl/Cmd+I**
4. Ask: `"Why are these wrapped in separate functions instead of calling the hook functions directly?"`

### Activity 1C: Explore with Autocomplete (3 min)
**Use:** 👻 Autocomplete Mode

1. Open `src/utils/dateHelpers.js`
2. Scroll to the bottom
3. Type: `// This module provides`
4. Press Tab to accept Copilot's suggestion
5. Continue typing and accepting suggestions

**Observe:** Does Copilot understand the file's purpose?

---

## 🛠️ Exercise 2: Adding New Features (25 min)

**Goal:** Use Copilot to implement new features

### Choose Your Feature

Pick one (or try multiple):
- ⭐ **Easy:** Priority filter checkboxes
- ⭐⭐ **Medium:** Date range filter
- ⭐⭐⭐ **Advanced:** Dark mode toggle
- ⭐⭐⭐ **Advanced:** Bulk operations

---

### Feature A: Priority Filter Checkboxes

#### Step 1: Plan (3 min)
**Use:** 💬 Chat Mode

```
"I want to add priority filter checkboxes (high, medium, low)
to the FilterControls component. What's the best approach?"

"What state management changes do I need?"

"How should I integrate with the existing applyFilters function?"
```

#### Step 2: Modify Component (5 min)
**Use:** ✏️ Inline Chat

1. Open `src/components/TaskManager.jsx`
2. Find the `FilterControls` component
3. Highlight the entire function (not just the JSX)
4. Press **Ctrl/Cmd+I**
5. Ask: `"Add checkboxes for filtering by priority (high, medium, low)"`

**Note:** Copilot may generate both UI and handler logic. Check if it created `handlePriorityChange` or similar - if so, you can skip Step 3!

#### Step 3: Write Handler (3 min) - *Skip if generated in Step 2*
**Use:** 👻 Autocomplete

1. In `TaskManager.jsx`, add a new line
2. Type: `// Handle priority filter changes`
3. Press Enter, then type: `const handlePriorityFilter = (`
4. Let Copilot suggest the implementation
5. Press Tab to accept

#### Step 4: Test & Iterate (2 min)

Save and check the browser. If issues:
- Use Inline Chat on buggy code: `"This isn't working. What's wrong?"`
- Iterate until it works!

---

### Feature B: Date Range Filter

#### Step 1: Plan (3 min)
**Use:** 💬 Chat

```
"I want to add a date range filter (from/to dates) to filter tasks by due date.
What's the best approach? Note: some tasks may not have due dates (null).
I need to handle edge cases like only 'from' or only 'to' being set."
```

#### Step 2: Add Date Inputs (4 min)
**Use:** ✏️ Inline Chat

1. Open `src/components/TaskManager.jsx`
2. Find the `FilterControls` component
3. Highlight the entire function (not just the JSX)
4. Press **Ctrl/Cmd+I**
5. Ask: `"Add two date inputs for filtering by date range: 'From date' and 'To date'"`

**Note:** Copilot may generate both UI and handler logic (like `handleDateChange`). Check what was created - if the handler is already there, you can skip Step 3!

#### Step 3: Implement Filter Handler (5 min) - *Skip if generated in Step 2*
**Use:** 👻 Autocomplete

1. In `FilterControls`, add a handler
2. Type: `// Handle date range filter changes`
3. Press Enter, then type: `const handleDateRangeChange = (`
4. Let Copilot suggest the implementation
5. Verify it updates the filters state with date range values

#### Step 4: Update Filter Logic (4 min)
**Use:** ✏️ Inline Chat with file context

1. Open `src/utils/taskFilters.js`
2. Find and highlight the `applyFilters` function
3. Press **Ctrl/Cmd+I**
4. Ask: `"Update this to handle date range filtering. The FilterControls in #file:TaskManager.jsx now passes dateFrom and dateTo in the filters object. Filter tasks where dueDate falls within this range, handling null dates."`

**Key Learning:** Using `#file:` in your prompt lets Copilot see your changes in other files! This helps it understand the full context and integrate your changes correctly.

#### Step 5: Test & Debug (3 min)

1. Save and test the date filters in your browser
2. Try changing the dates - do tasks filter correctly?

**If filtering doesn't work:**

3. Open `src/components/TaskManager.jsx` and check the date input field names in `handleDateChange`
4. Open `src/utils/taskFilters.js` and check what property names the filter logic is looking for
5. **Do they match?** (Common bug: `fromDate`/`toDate` vs `dateFrom`/`dateTo`)
6. If they don't match, use **Inline Chat** on either location:
   - Ask: `"The field names don't match. Fix this to use consistent naming: dateFrom and dateTo"`

**Key Learning:** Always test AI-generated code! Copilot can create working code for each part, but sometimes naming inconsistencies slip through between files. This is why verification is critical.

---

### Feature C: Dark Mode Toggle

#### Step 1: Plan (3 min)
**Use:** 🤖 @workspace

```
"@workspace I want to add dark mode support. I need:
1. A toggle button in the header
2. Dark color scheme in CSS
3. State to persist the theme

Which files need changes?"
```

#### Step 2: Add State (4 min)
**Use:** ✏️ Inline Chat

1. Open `src/components/TaskManager.jsx`
2. Highlight state declarations at top
3. Press **Ctrl/Cmd+I**
4. Ask: `"Add dark mode state with localStorage persistence"`

#### Step 3: Add Toggle (3 min)
**Use:** 👻 Autocomplete

1. In header section
2. Type: `// Dark mode toggle button`
3. Let Copilot suggest implementation

#### Step 4: Update CSS (3 min)
**Use:** ✏️ Inline Chat

1. Open `src/App.css`
2. Add after `:root` variables
3. Type: `/* Dark mode colors */`
4. Or use Inline Chat: `"Add dark mode CSS variables using [data-theme='dark']"`

---

### Feature D: Bulk Operations

#### Step 1: Research (3 min)
**Use:** 💬 Chat

```
"How should I implement bulk selection and delete in React?
I need checkboxes on TaskCards for multi-select."
```

#### Step 2: Add State (4 min)
**Use:** ✏️ Inline Chat

Highlight state in TaskManager, ask:
```
"Add state for tracking selected task IDs using a Set"
```

#### Step 3: Update TaskCard (4 min)
**Use:** 👻 Autocomplete + ✏️ Inline Chat

1. Open `TaskCard.jsx`
2. Add props: `isSelected, onSelect`
3. Use Inline Chat: `"Add selection checkbox separate from complete checkbox"`

#### Step 4: Bulk Actions Bar (5 min)
**Use:** 🤖 @workspace

```
"@workspace Create a BulkActionsBar component that appears when tasks
are selected, showing:
- Count of selected tasks
- Delete button
- Mark complete button
- Clear selection button

Add it to TaskManager above the board/list view."
```

---

## 🐛 Exercise 3: Debugging (20 min)

**Goal:** Use Copilot to find and fix bugs

The Task Manager has **3 intentional bugs**. Find and fix them!

---

### Bug #1: The Disappearing Tasks

**Symptom:** Tasks disappear when you refresh the page

#### Step 1: Describe Problem (2 min)
**Use:** 💬 Chat

```
"I have a bug where tasks disappear on page refresh.
I'm using localStorage to persist them. What could cause this?"

Follow-up: "What are common useEffect and localStorage mistakes?"
```

#### Step 2: Examine Code (3 min)
**Use:** ✏️ Inline Chat

1. Open `src/hooks/useLocalStorage.js`
2. Highlight the `useEffect` at the bottom (lines 39-48)
3. Press **Ctrl/Cmd+I**
4. Ask: `"Is there a problem with this useEffect?"`

Copilot should identify: **Missing 'key' in dependency array**

#### Step 3: Fix It (2 min)
**Use:** 👻 Autocomplete

1. Start fixing the dependency array
2. Type the opening bracket `[`
3. Let Copilot suggest the correct dependencies
4. Test: Save, refresh browser, tasks should persist!

---

### Bug #2: The Today Paradox

**Symptom:** Tasks due TODAY incorrectly show as "Overdue!"

#### Step 1: Understand Issue (2 min)
**Use:** 💬 Chat

```
"I have a bug where tasks due today show as overdue.
Here's my isOverdue function:

[paste the function from dateHelpers.js]

Why would this mark today's tasks as overdue?"
```

#### Step 2: Examine Function (3 min)
**Use:** ✏️ Inline Chat

1. Open `src/utils/dateHelpers.js`
2. Highlight the `isOverdue` function (lines 55-64)
3. Press **Ctrl/Cmd+I**
4. Ask: `"This marks tasks due today as overdue. What's wrong?"`

Copilot should identify: **Comparing full timestamps instead of dates, wrong operator**

#### Step 3: Fix It (3 min)
**Use:** 👻 Autocomplete

1. Add comment: `// Check if date is before today (not including today)`
2. Rewrite function, let Copilot suggest correct logic
3. Test: Task due today should NOT show "Overdue!"

---

### Bug #3: The Sorting Shuffle

**Symptom:** Sorting by due date shows tasks in wrong order

#### Step 1: Reproduce (1 min)

1. Switch to "List" view in browser
2. Change sort to "Due Date"
3. Notice incorrect order

#### Step 2: Find Code (2 min)
**Use:** 🤖 @workspace

```
"@workspace Search for date sorting functions.
I have a bug where sorting by due date doesn't work correctly."
```

Should find `sortByDueDate` in `taskFilters.js`

#### Step 3: Analyze Bug (3 min)
**Use:** ✏️ Inline Chat

1. Open `src/utils/taskFilters.js`
2. Highlight `sortByDueDate` function (lines 95-107)
3. Press **Ctrl/Cmd+I**
4. Ask: `"This sort doesn't work correctly. What's the bug?"`

Copilot should identify: **String comparison instead of Date objects**

#### Step 4: Fix It (3 min)
**Use:** ✏️ Inline Chat

Highlight buggy logic, ask:
```
"Fix this to use Date objects instead of string comparison,
and use the compareDates function from this file"
```

Or rewrite using hint from Chat that mentioned `compareDates`

#### Step 5: Test (1 min)

Save, sort by due date, verify chronological order!

---

## 💡 Pro Tips

### Writing Better Prompts

**❌ Vague:**
```
"add a button"
```

**✅ Specific:**
```
"add a button to delete selected tasks with a confirmation dialog"
```

**❌ No context:**
```
"fix this"
```

**✅ With context:**
```
"this function should filter by date range but doesn't handle null dates"
```

### Using Comments Effectively

```javascript
// Calculate total price with tax and discount
// Tax rate is 8%, discount is a percentage (0-100)
function calculateTotal(price, discountPercent) {
  // Copilot uses your comment to suggest implementation
```

### Iterating on Suggestions

Don't accept the first suggestion blindly:
- Press **Alt/Opt+]** to see alternatives
- Ask Copilot to refine: "Make this more concise"
- Combine suggestions: Take parts from multiple

### When to Use Which Mode

| Task | Best Mode | Why |
|------|-----------|-----|
| Quick completion | 👻 Autocomplete | Fastest for obvious next steps |
| Understanding "why" | 💬 Chat | Detailed explanations |
| Modifying code | ✏️ Inline Chat | Context-aware changes |
| Multi-file tasks | 🤖 @workspace | Codebase understanding |

---

## 🔍 Verifying Copilot Works

### ✅ Check Status Bar

Look bottom-right in VS Code:
- Copilot icon should be visible and colored (not gray)
- Click icon → should show "Copilot is ready"

### ✅ Test Autocomplete

1. Open any `.jsx` file
2. Type: `// Helper function to`
3. Wait 1-2 seconds
4. Gray ghost text should appear

### ✅ Test Chat

1. Press **Ctrl/Cmd+Shift+I**
2. Type: "Hello"
3. Copilot should respond

### ✅ Test Inline Chat

1. Highlight any function
2. Press **Ctrl/Cmd+I**
3. Small chat box appears
4. Type: "Explain this"

### ✅ Test @workspace

1. Open Chat
2. Type: `"@workspace What files are in this project?"`
3. Should list files in response

---

## 🏗️ Project Structure

```
github-copilot-intro/
├── .devcontainer/
│   ├── devcontainer.json       # Codespaces config
│   └── README.md               # Codespaces troubleshooting
├── src/
│   ├── components/
│   │   ├── TaskManager.jsx     # Main container
│   │   ├── TaskBoard.jsx       # Kanban view
│   │   ├── TaskList.jsx        # List view
│   │   ├── TaskCard.jsx        # Individual task
│   │   └── TaskForm.jsx        # Add/edit modal
│   ├── hooks/
│   │   ├── useTasks.js         # Task CRUD operations
│   │   └── useLocalStorage.js  # Persistence (⚠️ has bug)
│   ├── utils/
│   │   ├── taskFilters.js      # Filtering/sorting (⚠️ has bug)
│   │   └── dateHelpers.js      # Date utilities (⚠️ has bug)
│   └── styles/
│       ├── TaskManager.css
│       ├── TaskBoard.css
│       ├── TaskList.css
│       ├── TaskCard.css
│       └── TaskForm.css
├── README.md                    # This file
└── package.json
```

---

## 🐛 Troubleshooting

### Copilot Icon is Gray

**Fix:**
1. Click the gray icon
2. Sign in to GitHub
3. Or: Command Palette (F1) → "GitHub Copilot: Sign In"

### No Autocomplete Suggestions

**Check:**
- Copilot icon is colored (not gray)
- You're in a code file (.js, .jsx)
- Wait 1-2 seconds after typing
- Try typing a comment describing what you want

**Fix:**
- F1 → "GitHub Copilot: Enable"
- Reload VS Code: F1 → "Reload Window"

### Chat Not Responding

**Try:**
- Check internet connection
- Reload VS Code window
- Sign out and back into GitHub
- Close and reopen chat panel

### Port 5173 Not Accessible (Codespaces)

**Fix:**
1. Check "PORTS" tab in VS Code
2. Click globe icon next to port 5173
3. Or manually forward the port

### App Won't Start

**Fix:**
```bash
# Stop dev server (Ctrl+C)
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## ⌨️ Keyboard Shortcuts Cheat Sheet

### Copilot

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Accept suggestion | Tab | Tab |
| Accept word | Ctrl+→ | Cmd+→ |
| Next suggestion | Alt+] | Opt+] |
| Previous suggestion | Alt+[ | Opt+[ |
| Dismiss | Esc | Esc |
| **Open Chat** | **Ctrl+Shift+I** | **Cmd+Shift+I** |
| **Inline Chat** | **Ctrl+I** | **Cmd+I** |

### VS Code

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Toggle terminal | Ctrl+` | Cmd+` |
| Quick file open | Ctrl+P | Cmd+P |
| Command palette | Ctrl+Shift+P | Cmd+Shift+P |
| Toggle sidebar | Ctrl+B | Cmd+B |

---

## 📖 Additional Resources

- **GitHub Copilot Docs:** https://docs.github.com/en/copilot
- **Codespaces Docs:** https://docs.github.com/en/codespaces
- **VS Code Copilot Guide:** https://code.visualstudio.com/docs/editor/github-copilot
- **React Documentation:** https://react.dev/
- **Vite Documentation:** https://vitejs.dev/

---

## 🎓 Workshop Principles

### 1. AI Amplifies, Doesn't Replace

You're still the developer. Copilot is a tool like Stack Overflow or documentation - it makes you faster, not obsolete.

### 2. Always Verify

- Read the code Copilot suggests
- Understand what it does
- Test it works correctly
- Check for edge cases

### 3. Iteration is Normal

First suggestion rarely perfect:
- Ask for refinements
- Try different prompts
- Combine multiple suggestions
- Edit to fit your needs

### 4. Be Specific

Copilot works better with clear intent:
- Describe what you want
- Provide context
- Use descriptive names
- Write helpful comments

### 5. Critical Thinking Required

Copilot can be wrong:
- Question suggestions
- Verify logic
- Test edge cases
- Use your expertise

---

## 🎯 Success Checklist

After this workshop, you should be able to:

- [ ] Use autocomplete for quick completions
- [ ] Use Chat for understanding and planning
- [ ] Use Inline Chat for targeted modifications
- [ ] Use @workspace for codebase-wide questions
- [ ] Know when to use which mode
- [ ] Write effective prompts
- [ ] Iterate on suggestions
- [ ] Verify AI-generated code
- [ ] Feel confident using Copilot daily

---

## 💬 Feedback & Support

**Issues with this workshop?**
- Open an issue: https://github.com/callibrity/github-copilot-intro/issues

**Questions about Copilot?**
- GitHub Copilot Discussions: https://github.com/orgs/community/discussions/categories/copilot

---

## 📄 License

This workshop is provided for educational purposes. Feel free to use and modify for your learning!

---

**Happy coding with GitHub Copilot! 🚀**

Remember: You're the developer. Copilot is your assistant. Together, you're unstoppable! ✨
