# GEMINI.md

## Project Overview

This project is a highly customizable, lightweight, and open-source coding CLI powered by Groq. It's designed to be a blueprint for developers to create their own custom CLIs. The CLI uses a terminal-based chat interface to interact with the user.

**Main Technologies:**

*   **Language:** TypeScript
*   **Framework:** Node.js
*   **UI:** React with Ink
*   **AI:** Groq SDK
*   **Package Manager:** npm

## Building and Running

### Installation

```bash
git clone https://github.com/build-with-groq/groq-code-cli.git
cd groq-code-cli
npm install
npm run build
npm link
```

### Development

To automatically apply changes to the source code, run the following command in the background:

```bash
npm run dev
```

### Running the CLI

To start the chat session, simply run:

```bash
groq
```

### Testing

To run the test suite:

```bash
npm test
```

## Development Conventions

### Coding Style

The project uses `prettier` for code formatting and `xo` for linting. The configuration can be found in `package.json`.

### Customization

The CLI is designed to be easily extended. Here's how to add new features:

#### Adding New Tools

Tools are AI-callable functions that extend the CLI's capabilities. To add a new tool:

1.  **Define the tool schema** in `src/tools/tool-schemas.ts`.
2.  **Implement the tool function** in `src/tools/tools.ts`.
3.  **Register the tool** in the `TOOL_REGISTRY` object and `executeTool` switch statement in `src/tools/tools.ts`.
4.  **Add the schema** to the `ALL_TOOL_SCHEMAS` array in `src/tools/tool-schemas.ts`.

#### Adding New Slash Commands

Slash commands provide direct user interactions. To add a new command:

1.  **Create the command definition** in `src/commands/definitions/`.
2.  **Register the command** in `src/commands/index.ts` by importing it and adding it to the `availableCommands` array.

## Project Structure

```
groq-code-cli/
├── src/
│   ├── commands/           # Slash command definitions
│   ├── core/               # Core agent and CLI logic
│   ├── tools/              # Tool definitions and implementations
│   ├── ui/                 # React components for the terminal UI
│   └── utils/              # Utility functions
├── package.json            # Project metadata and dependencies
└── tsconfig.json           # TypeScript configuration
```

## Core Components

### Agent (`src/core/agent.ts`)

The `Agent` class is the heart of the CLI. It manages the conversation with the Groq API, including:

*   Maintaining the message history.
*   Handling tool calls and responses.
*   Managing the AI model, temperature, and system message.
*   Providing callbacks for UI updates.

The system message in `src/core/agent.ts` is particularly important, as it sets the context and rules for the AI model.

### Tools (`src/tools/tools.ts`)

This file defines the functions that the AI agent can execute. The available tools are:

*   `readFile`: Reads the contents of a file.
*   `createFile`: Creates a new file or directory.
*   `editFile`: Edits a file by replacing text.
*   `deleteFile`: Deletes a file or directory.
*   `listFiles`: Lists files and directories.
*   `searchFiles`: Searches for text patterns in files.
*   `executeCommand`: Executes a shell command.
*   `createTasks`: Creates a task list.
*   `updateTasks`: Updates the status of tasks.
*   `web_search`: Searches the web for information.
*   `fetch_url_content`: Extracts the main content from a URL.

### Commands (`src/commands/index.ts`)

This file manages the slash commands that the user can input in the chat. The available commands are:

*   `/help`: Shows help and available commands.
*   `/login`: Logs in with your Groq API key.
*   `/model`: Selects your Groq model.
*   `/clear`: Clears the chat history and context.
*   `/init`: Initializes the project with a `GEMINI.md` file.
*   `/reasoning`: Toggles the display of reasoning content in messages.
*   `/stats`: Displays session statistics and token usage.
*   `/save [name]`: Saves the current chat session.
*   `/load <name>`: Loads a saved chat session.
*   `/sessions`: Lists all saved sessions.
