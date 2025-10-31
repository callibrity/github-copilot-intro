# Devcontainer Configuration for AI Workshop

This devcontainer provides a pre-configured development environment for the AI-Assisted Development Workshop.

## What's Included

### Runtime & Tools
- **Node.js 20** - JavaScript runtime
- **npm** - Package manager
- **Git** - Version control

### Pre-installed VS Code Extensions
- **GitHub Copilot** - AI pair programmer (autocomplete)
- **GitHub Copilot Chat** - AI chat interface
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Auto Close Tag** - HTML/JSX tag completion
- **Auto Rename Tag** - Synchronized tag renaming

### Pre-configured Settings
- Format on save enabled
- ESLint auto-fix on save
- Copilot enabled for JavaScript/React
- Inline suggestions enabled
- Tab size: 2 spaces
- Line endings: LF (Unix-style)

### Automatic Setup
- Port 5173 forwarded (Vite dev server)
- `npm install` runs automatically on container creation
- Welcome message with quick start instructions

## Using with GitHub Codespaces

### Quick Start
1. Click the "Code" button on GitHub
2. Select "Codespaces" tab
3. Click "Create codespace on main"
4. Wait for container to build (~2-3 minutes first time)
5. Run `npm run dev` in the terminal
6. Click "Open in Browser" when prompted

### First Time Setup
The first time you create a Codespace:
- Container image will be pulled (~1 minute)
- Dependencies will be installed automatically (`npm install`)
- Extensions will be installed
- You'll see a welcome message when ready

### Subsequent Uses
When reopening an existing Codespace:
- Starts in ~10 seconds
- All dependencies already installed
- Extensions already configured
- Just run `npm run dev` to start

## Using Locally with VS Code

If you prefer to use the devcontainer locally:

### Prerequisites
- Docker Desktop installed and running
- VS Code with "Dev Containers" extension

### Steps
1. Clone the repository
2. Open the folder in VS Code
3. Click "Reopen in Container" when prompted
   (or use Command Palette: "Dev Containers: Reopen in Container")
4. Wait for container to build
5. Run `npm run dev`

## Customization

### Adding Extensions
Edit `.devcontainer/devcontainer.json`:
```json
"extensions": [
  "your.extension.id"
]
```

### Changing Settings
Edit `.devcontainer/devcontainer.json`:
```json
"settings": {
  "your.setting": "value"
}
```

### Running Different Commands
Modify these fields:
- `postCreateCommand`: Runs once after container is created
- `postStartCommand`: Runs every time container starts

## Troubleshooting

### Port 5173 not forwarding
- Check the "Ports" tab in VS Code
- Manually forward port 5173 if needed
- Try stopping and restarting the dev server

### Extensions not working
- Wait for container to fully initialize
- Check "Output" panel for extension errors
- Try reloading VS Code window

### Copilot not suggesting code
- Check Copilot is enabled (status bar icon)
- Verify you're signed into GitHub
- Try typing more context to trigger suggestions

### npm install fails
- Check your internet connection
- Try deleting `node_modules` and running `npm install` again
- Check terminal output for specific errors

## Workshop Notes

### For Facilitators
- Students should create Codespaces at least 5 minutes before workshop starts
- First-time build takes ~2-3 minutes
- Test that Copilot is working for all students
- Have students verify they can access http://localhost:5173 in browser

### For Students
- You can pause/stop Codespaces when not in use (free tier has limits)
- All your changes are saved automatically
- You can access the same Codespace from any computer
- Delete Codespaces after the workshop to free up quota

## Cost Considerations

### GitHub Free Tier
- 120 core hours per month free
- 15 GB storage per month free
- 2-core machine: 60 hours of usage
- 4-core machine: 30 hours of usage

### For This Workshop
- Use 2-core machine (default)
- Workshop duration: ~2 hours
- Plenty of free tier available

### Best Practices
- Stop Codespace when done (pauses billing)
- Delete after workshop (frees quota)
- Share Codespace URL during active work

## Additional Resources

- [GitHub Codespaces Docs](https://docs.github.com/en/codespaces)
- [VS Code Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
- [Devcontainer Specification](https://containers.dev/)
