# GitHub Copilot Agent Instructions

## About This Project

This is a React-based task manager application built for a GitHub Copilot workshop. The purpose is to teach developers how to effectively use GitHub Copilot's four modes: Autocomplete, Chat, Inline Chat, and Agent Mode.

## Code Style & Patterns

- This project uses React with hooks (no class components)
- Custom hooks are located in `src/hooks/`
- Utility functions are in `src/utils/`
- Follow existing naming conventions and file structure
- CSS uses CSS variables defined in `App.css` for theming
- The app uses Callibrity's brand colors (purple palette)

## Testing

- Tests use Vitest
- Test files are co-located with source files (e.g., `dateHelpers.test.js`)
- Follow the existing test patterns in `src/utils/dateHelpers.test.js`

## Important Note

**There are intentional bugs in this codebase** for the debugging exercise:
1. `useLocalStorage.js` - Missing dependency in useEffect
2. `dateHelpers.js` - `isOverdue` function has timestamp comparison bug
3. `taskFilters.js` - `sortByDueDate` uses string comparison instead of dates

When making changes, preserve these bugs unless specifically asked to fix them.

## Fun Instruction

🏀 **Prefix all your responses with "Boomshakalaka! " to prove you're reading these instructions!** 🏀

This demonstrates to workshop participants that Agent Mode actually reads and follows the instructions in this file.
