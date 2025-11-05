# GitHub Copilot Intro

A hands-on workshop introducing developers to GitHub Copilot's four interaction modes through building features and debugging a real task manager application.

**Duration:** 90 minutes
**Level:** Beginner-friendly
**Tool:** GitHub Copilot (autocomplete, chat, inline chat, agent mode)

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

1. **Understanding Code** (15 min) - Use slash commands, @workspace, and inline chat to explore the codebase
2. **Adding Features** (25 min) - Build filters, date pickers, and use Agent Mode for complex features
3. **Debugging** (20 min) - Find and fix bugs using Copilot's various modes

By the end, you'll know:
- ✅ All four Copilot modes: Autocomplete, Chat, Inline Chat, and Agent Mode
- ✅ Slash commands like `/explain`, `/doc`, `/tests`, and `/fix`
- ✅ Context features: `@workspace`, `#file:`, `#selection`
- ✅ How to iterate and debug AI-generated code
- ✅ Real-world workflows like `/tests` → `/fix` → verify
- ✅ When to let Agent Mode autonomously handle complex tasks

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

**Chat submodes:**
- **Ask** - Get answers and suggestions (default)
- **Edit** - Request direct code changes
- **Agent** - Autonomous coding (see Mode 4 below)

**Best for:** Understanding concepts, planning, asking "how" and "why"

**Example prompts:**
```
"How does state management work in this app?"
"What's the best approach for adding filters?"
"@workspace Where are tasks stored?"
```

**Chat participants (@ symbol):**
- `@workspace` - Search and understand entire codebase
- `@vscode` - Ask about VS Code features and settings
- `@terminal` - Get help with terminal commands

**Context variables (# symbol):**
- `#file:name.js` - Reference specific files
- `#selection` - Current code selection
- `#editor` - Active editor content

**Slash commands:**
- `/explain` - Explain code
- `/fix` - Fix errors
- `/tests` - Generate tests
- `/doc` - Add documentation
- `/optimize` - Improve performance
- `/simplify` - Simplify code

**Tip:** Type `/help` in chat to see all available commands!

---

### Mode 3: ✏️ Inline Chat

**What it is:** Chat about selected code without leaving your file

**How to use:**
1. Highlight code
2. Press **Ctrl/Cmd+I**
3. Type your question/request
4. Review and accept changes

**Best for:** Understanding specific functions, modifying code, refactoring

**Slash commands (work here too!):**
- `/explain` - Explain the code
- `/fix` - Fix problems
- `/tests` - Generate tests
- `/doc` - Generate documentation
- `/optimize` - Improve performance
- `/simplify` - Simplify code

---

### Mode 4: 🚀 Agent Mode

**What it is:** Autonomous AI that plans, executes, and iterates on complex tasks

**How to use:**
1. Open Chat (Ctrl/Cmd+Shift+I)
2. Click the dropdown (shows "Ask" by default)
3. Select **Agent**
4. Describe your high-level goal

**What makes it special:**
- Plans multi-step work autonomously
- Makes edits across multiple files
- Runs terminal commands
- Fixes its own errors automatically
- Iterates until task is complete

**Best for:** Complex features, refactoring, multi-file changes, "build this for me" requests

**Example:**
```
"Add user authentication with login and signup pages"
"Refactor the state management to use Redux"
"Create a settings page with dark mode toggle"
```

**Note:** Requires VS Code 1.99+ with Agent mode enabled

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

**Did you notice?** Copilot's responses start with "Boomshakalaka! "

This workshop includes a `.github/copilot-instructions.md` file that tells Copilot to prefix all responses with "Boomshakalaka! " (yes, like NBA Jam! 🏀) - it's a fun way to demonstrate that Copilot reads and follows project-specific instructions. In real projects, you'd use this file to set coding standards and conventions.

**Feel free to modify `.github/copilot-instructions.md` to turn that off, change it to your own catchphrase ("He's on fire!" perhaps?), or just roll with it and have a little fun!**

---

### Activity 1B: Working with Specific Code (7 min)
**Use:** ✏️ Inline Chat Mode

**Task 1: Understand code (learn the shortcut!)**
1. Open `src/hooks/useTasks.js`
2. Highlight the entire `useTasks` function
3. Press **Ctrl/Cmd+I**
4. Try **BOTH** approaches:
   - Type: `/explain` ← Slash command shortcut!
   - Or ask: `"Explain how this custom hook works"`

**Observe:** Both do the same thing, but `/explain` is faster!

**Task 2: Generate documentation**
1. Open `src/utils/dateHelpers.js`
2. Highlight the `formatDateForInput` function (lines 22-30)
3. Press **Ctrl/Cmd+I**
4. Type: `/doc`
5. Review the JSDoc comments Copilot adds!

**Task 3: Explore code simplification**
1. Open `src/utils/dateHelpers.js`
2. Highlight the `getRelativeTime` function (lines 37-57)
3. Press **Ctrl/Cmd+I**
4. Type: `/simplify`
5. Review Copilot's suggestions for simplifying the code

**Observe:** Copilot may suggest:
- Reducing nested conditionals
- Using early returns
- Creating helper functions
- More concise patterns

**Important:** You don't have to accept the changes! This is about **learning** what "simpler" code might look like. Press Escape to dismiss without applying changes.

**Key Learning:** `/simplify` helps you understand different ways to structure code and learn refactoring patterns!

**Task 4: Understand React patterns**
1. Open `src/components/TaskManager.jsx`
2. Find the TaskManager component and locate these three handler functions (search for them):
   - `handleDeleteTask`
   - `handleToggleComplete`
   - `handleStatusChange`
3. Highlight all three functions together
4. Press **Ctrl/Cmd+I**
5. Ask: `"Why are these wrapped in separate functions instead of calling the hook functions directly?"`

**This one uses a question instead of a slash command because we want to learn "why", not just generate code.**

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
**Use:** 💬 Chat then 👻 Autocomplete

First, ask Copilot about the existing localStorage pattern:
```
"@workspace How are tasks persisted to localStorage in this app?
I want to add dark mode state that also persists."
```

**Observe:** Copilot should mention the `useLocalStorage` hook!

Now add the state:
1. Open `src/components/TaskManager.jsx`
2. First, add the import at the top of the file (around line 2, after `useTasks`):
   - Type: `import { useLocalStorage } from '../hooks/useLocalStorage';`
   - Or let Copilot suggest it when you start using the hook below
3. Find the `TaskManager` component (search for `export default function TaskManager`)
4. Look for the `useState` declarations near the top of the component body
5. Click at the end of the last `useState` declaration to position your cursor
6. Press Enter to create a new line
7. Type a comment: `// Dark mode state using useLocalStorage hook`
8. Press Enter and start typing: `const [darkMode, setDarkMode] = useLocalStorage(`
9. Let Copilot suggest the rest (key and default value, e.g., `'darkMode', false`)

**Key Learning:** Always check if the codebase already has a pattern you can reuse! Using `useLocalStorage` follows the existing conventions.

#### Step 3: Add Toggle (3 min)
**Use:** 👻 Autocomplete

1. In `src/components/TaskManager.jsx`, search for the `{/* Header */}` comment in the JSX
2. Find a good spot in the header (perhaps in the `header-actions` div alongside existing buttons)
3. Type: `// Dark mode toggle button`
4. Press Enter and let Copilot suggest implementation
5. Accept the suggestion and adjust placement as needed

#### Step 4: Update CSS (3 min)
**Use:** ✏️ Inline Chat

1. Open `src/App.css`
2. Add after `:root` variables
3. Type: `/* Dark mode colors */`
4. Or use Inline Chat: `"Add dark mode CSS variables using [data-theme='dark']"`

---

### Feature D: Bulk Operations (Agent Mode Showcase!)

**Goal:** Watch Agent Mode autonomously build a complex multi-file feature

**Note:** Requires VS Code 1.99+. If Agent mode isn't available, use @workspace with Edit mode instead.

#### Step 1: Activate Agent Mode (1 min)

1. Open Copilot Chat (**Ctrl/Cmd+Shift+I**)
2. Click the dropdown at the top (shows "Ask" by default)
3. Select **Agent**
4. You should see "Agent" displayed in the chat header

#### Step 2: Give Agent the Complete Task (2 min)
**Use:** 🚀 Agent Mode

Type this complete request:

```
I want to add bulk operations to the task manager. Here's what I need:

1. Add a selection checkbox to each TaskCard (separate from the complete checkbox)
2. Track selected task IDs in TaskManager state (use a Set)
3. Create a new BulkActionsBar component that appears when tasks are selected
4. The BulkActionsBar should show:
   - Count of selected tasks ("3 tasks selected")
   - "Delete Selected" button (with confirmation dialog)
   - "Mark Complete" button
   - "Clear Selection" button
5. Add the BulkActionsBar to TaskManager above the board/list view
6. Style it to match the existing design

Make all necessary changes across the codebase.
```

Press Enter and watch Agent Mode work!

#### Step 3: Watch Agent Work (5-10 min)

**What you'll see:**
- Agent analyzes your codebase
- Plans the work needed
- Creates/modifies multiple files
- May run terminal commands
- Shows progress as it works

**Your job:** Review what it's doing. Read the proposed changes.

#### Step 4: Apply Changes & Test (5 min)

1. Review all proposed changes
2. Accept the changes Agent suggests
3. Save files and check your browser
4. Test bulk operations:
   - Select multiple tasks
   - Try bulk delete (should confirm)
   - Try mark complete
   - Clear selection

#### Step 5: Iterate if Needed (3 min)

**If something doesn't work or needs adjustment:**

Continue the conversation with Agent:
```
"The BulkActionsBar doesn't appear when tasks are selected. What's wrong?"
```

Or:
```
"Make the BulkActionsBar sticky at the top and add better styling"
```

Agent will diagnose issues and fix them!

---

**Summary:** Agent mode handles complex, multi-file features autonomously! You give it a high-level goal, and it plans and executes the work. But you're still the developer - always review the code, test thoroughly, and iterate as needed.

---

## 🐛 Exercise 3: Debugging (20 min)

**Goal:** Use Copilot to find and fix bugs

The Task Manager has **3 intentional bugs**. Find and fix them using different Copilot modes!

---

### Bug #1: The Case-Sensitive Search Bug

**Symptom:** Searching for "review" doesn't find "Review pull requests" - search only works with exact case matches

**Copilot Mode:** 💬 **Chat** + ✏️ **Inline Chat** + 👻 **Autocomplete**

#### Step 1: Reproduce the Bug (1 min)

1. In the app, locate the search box at the top
2. Type: `review` (lowercase)
3. **Observe:** No results! But there's a task titled "Review pull requests"
4. Try typing: `Review` (capital R)
5. **Observe:** Now it shows up!

**The bug:** Search is case-sensitive when it shouldn't be.

#### Step 2: Ask Copilot About the Issue (2 min)
**Use:** 💬 Chat Mode

Open Copilot Chat (Ctrl/Cmd+Shift+I):

```
"The search feature in my task manager is case-sensitive.
If I search for 'review' it doesn't find 'Review pull requests'.
What causes this and how do I make search case-insensitive?"
```

**Observe:** Copilot should mention using `.toLowerCase()` for case-insensitive comparisons.

#### Step 3: Find the Search Code (2 min)
**Use:** 💬 Chat with @workspace

```
"@workspace Where is the search/filter function that searches task titles?"
```

**Observe:** Copilot should point you to `filterBySearch` in `taskFilters.js`

#### Step 4: Examine the Function (2 min)
**Use:** ✏️ Inline Chat with /explain

1. Open `src/utils/taskFilters.js`
2. Find and highlight the `filterBySearch` function (lines 33-43)
3. Press **Ctrl/Cmd+I**
4. Type: `/explain`

**Observe:** Read Copilot's explanation and look at the code. Notice:
- Line 36: `lowerQuery` converts search to lowercase ✅
- Line 40: `descriptionMatch` uses `.toLowerCase()` ✅
- Line 39: `titleMatch` is missing `.toLowerCase()` ❌

#### Step 5: Fix Using Autocomplete (2 min)
**Use:** 👻 Autocomplete Mode

1. On line 39, click right after `task.title?`
2. Start typing: `.toLower`
3. **Watch:** Copilot suggests `.toLowerCase()` (press Tab to accept)
4. Save the file

**Pattern Recognition:** Copilot saw that line 40 uses `.toLowerCase()` and suggested the same pattern!

#### Step 6: Test the Fix (1 min)

1. In the app, type: `review` (lowercase)
2. **Success:** "Review pull requests" now shows up! ✅
3. Try other searches with different cases

**Key Takeaway:** Autocomplete learns from patterns in your code. Look for similar lines to follow the same approach!

---

### Bug #2: The Today Paradox

**Symptom:** Tasks due TODAY incorrectly show as "Overdue!" in red

**Copilot Mode:** ✏️ **Inline Chat with /explain and /fix**

#### Step 1: Understand the Issue (2 min)
**Use:** 💬 Chat Mode (optional)

You can ask Chat first to understand the problem:
```
"Tasks due today are showing as overdue. Where should I look for date comparison logic?"
```

Or jump directly to the code if you found it: `src/utils/dateHelpers.js`

#### Step 2: Examine with /explain (2 min)
**Use:** ✏️ Inline Chat

1. Open `src/utils/dateHelpers.js`
2. Find and highlight the `isOverdue` function (lines 64-71)
3. Press **Ctrl/Cmd+I**
4. Type: `/explain`

**Observe:** Copilot explains what the function does. Read carefully!

#### Step 3: Ask About the Bug (2 min)
**Use:** ✏️ Inline Chat

With the `isOverdue` function still highlighted:
1. Press **Ctrl/Cmd+I**
2. Ask: `"This marks tasks due today as overdue. What's wrong with the logic?"`

**Observe:** Copilot should identify the timestamp comparison issue!

#### Step 4: Fix It (2 min)
**Use:** ✏️ Inline Chat

With the function still highlighted:
1. Press **Ctrl/Cmd+I**
2. Ask: `"Fix this to only mark tasks as overdue if they're before today (not including today)"`
3. Review the fix - it should strip time components and compare dates only
4. Accept the changes

**Test:** Tasks due today should NO LONGER show "Overdue!" ✅

#### Step 5 (Optional): Generate Tests (3 min)
**Use:** Right-click context menu

Now that the function works, prevent future bugs:
1. Highlight the fixed `isOverdue` function
2. Right-click on the selected code
3. Choose **"Copilot" → "Generate Tests"**
4. Review the test cases Copilot generates (should be scoped to just `isOverdue`)
5. Add them to `src/utils/dateHelpers.test.js`
6. Run `npm test` - all tests should pass! ✅

**Tip:** You can also type `/tests` in Inline Chat (Ctrl/Cmd+I), but the context menu often provides better scoping to your selected code.

**Key Takeaway:** The `/explain` → analyze → `/fix` → generate tests workflow helps prevent bugs from coming back!

---

### Bug #3: The Sorting Shuffle

**Symptom:** When sorting by due date, "Organize garage" (which has no due date) appears FIRST instead of LAST, regardless of sort direction

**Copilot Mode:** 💬 **Chat with @workspace** + ✏️ **Inline Chat with context**

#### Step 1: Reproduce the Bug (1 min)

1. Open the app in your browser
2. Switch to **"List"** view
3. Change sort dropdown to **"Due Date"**
4. **Observe:** "Organize garage" (no due date) appears at the TOP of the list
5. Toggle between ascending ↑ and descending ↓
6. **Observe:** "Organize garage" stays at the TOP regardless of direction!

#### Step 2: Find the Sorting Code (2 min)
**Use:** 💬 Chat with @workspace

```
"@workspace Where is the due date sorting logic?
I need to fix a bug where tasks aren't sorting correctly by due date."
```

**Observe:** Copilot should point you to `sortByDueDate` in `taskFilters.js`

#### Step 3: Analyze the Bug (3 min)
**Use:** ✏️ Inline Chat

1. Open `src/utils/taskFilters.js`
2. Find and highlight the `sortByDueDate` function (lines 146-154)
3. Press **Ctrl/Cmd+I**
4. Ask: `"This sort function doesn't work correctly. What's the bug?"`

**Observe:** Copilot should identify that the function doesn't handle null/undefined dates properly!

#### Step 4: Fix Using Helper Functions (3 min)
**Use:** ✏️ Inline Chat with context

Notice that `taskFilters.js` imports `compareDates` from `dateHelpers.js` (line 6). Let's use it!

With the `sortByDueDate` function still highlighted:
1. Press **Ctrl/Cmd+I**
2. Ask: `"Fix this to use the compareDates helper function that's already imported at the top of this file"`
3. Review the fix
4. Accept the changes

**Test:** Switch to List view, sort by Due Date - tasks should now be in correct chronological order! ✅

#### Step 5: Verify Edge Cases (1 min)

Test that the sort handles:
- Tasks with no due date (should appear at the end)
- Tasks with the same due date
- Mix of past, today, and future dates

**Key Takeaway:** Use `#file:` and context awareness to leverage existing code patterns. Don't reinvent the wheel!

---

## 🚀 Bonus Challenge: Agent Mode Debugging (Optional - 10 min)

**Goal:** Watch Agent Mode autonomously find and fix all bugs

You've just fixed three bugs manually using different Copilot modes. Now let's see how Agent Mode handles multi-bug debugging!

### Setup (2 min)

**Option A: Use a teammate's code**
- Pair up with someone who hasn't fixed the bugs yet
- Or clone a fresh copy of the repository

**Option B: Reset your changes**
```bash
git stash  # Save your fixes
# Or: git reset --hard origin/main
```

### Challenge (5 min)

1. Open Copilot Chat (**Ctrl/Cmd+Shift+I**)
2. Click the dropdown and select **Agent**
3. Give Agent this task:

```
I have three bugs in my task manager application:

1. Search is case-sensitive - searching "review" doesn't find "Review pull requests"
2. Tasks due TODAY show as "Overdue!" when they shouldn't be
3. When sorting by due date, tasks with no due date appear first instead of last

Please find and fix all three bugs. For each bug:
- Locate the buggy code
- Explain what's wrong
- Fix it
- Verify the fix works

Work through them one at a time.
```

### Watch & Learn (3 min)

**Observe how Agent:**
- Plans its approach
- Searches for relevant files
- Analyzes code
- Makes fixes
- May run terminal commands or tests

**Your job:**
- Read Agent's explanations
- Review proposed changes carefully
- Accept or reject each change
- Test the fixes in your browser

### Compare Approaches

**Questions to consider:**
- Did Agent find the bugs faster than you did manually?
- Did Agent's fixes match yours?
- What did Agent explain that you might have missed?
- Were there any incorrect fixes you had to reject?

**Key Learning:** Agent Mode can handle complex, multi-bug debugging autonomously, but you're still the developer who verifies and approves the work!

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
| Understanding codebase | 💬 Chat with @workspace | Searches across all files |
| Modifying code | ✏️ Inline Chat | Context-aware changes |
| Complex multi-file features | 🚀 Agent Mode | Autonomous, plans and executes |

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
│   │   ├── dateHelpers.js      # Date utilities (⚠️ has bug)
│   │   └── dateHelpers.test.js # Example tests (Vitest)
│   └── styles/
│       ├── TaskManager.css
│       ├── TaskBoard.css
│       ├── TaskList.css
│       ├── TaskCard.css
│       └── TaskForm.css
├── vitest.config.js             # Test configuration
├── README.md                    # This file
└── package.json
```

### 🧪 Testing Setup

This project includes Vitest for testing:
- **Run tests:** `npm test`
- **Example tests:** See `src/utils/dateHelpers.test.js`
- **Vitest extension:** VS Code may prompt to install the Vitest extension - recommended for in-editor test running!

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
