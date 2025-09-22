Overview
This project, Groq Agent, is a fork of the excellent groq-code-cli created by the build-with-groq team. The goal is to expand upon their lightweight and customizable foundation to provide a more comprehensive, out-of-the-box AI agent, while maintaining full respect for their original work.

The core idea remains the same: to offer a transparent and easy-to-modify template for developers who want to build their own AI programming assistant, avoiding the complexity of larger CLIs. To this solid base, Groq Agent adds key features such as real-time web search via the Tavily API (which offers a generous free tier with 1000 credits per month), the ability to fetch content from URLs, and full session management to save and load your conversations.

This makes Groq Agent an even more powerful starting point for your customizations. Use it as-is for a complete agent experience, or dive into the code to make it truly your own!

Here's where you could take Groq Agent in 2025 and beyond:

Multi-step Autonomous Agent: Enable an /autonomous mode where the agent can plan and execute complex sequences of commands and tools to achieve a high-level goal (e.g., "write tests for this class and then refactor it to improve readability").

Self-Correction and Automated Debugging: Create a tool that, given an error or a stack trace, can analyze the code, propose a solution, and apply it autonomously, running tests to verify the fix.

Collaborative Multi-Agent Systems: Introduce specialized agents. For example, a /planner that breaks down problems, a /coder that writes the code, and a /reviewer that checks for quality, having them collaborate to solve complex tasks.

Persistent Memory and Continuous Learning: Integrate long-term memory (e.g., via a vector database) to allow the agent to remember context and preferences across different sessions, improving its performance over time.

Advanced Code Analysis (AST): Develop tools that operate on the Abstract Syntax Tree (AST) of the code for sophisticated analyses like calculating cyclomatic complexity (/complexity), identifying dead code (/deadcode), or safe structural refactoring.

Integration with Development Platforms: Add tools to interact directly with APIs like GitHub (to create Pull Requests), Jira (to update tickets), or CI/CD pipelines (to trigger builds and deployments).

Dynamic Contextual UI: Allow the agent to dynamically generate complex interfaces in the terminal based on the task. For example, an interactive view for resolving Git merge conflicts.

Security Vulnerability Scanner: A tool that analyzes code for common vulnerabilities (e.g., SQL injection, XSS) and suggests the corresponding security patches.

Voice Interaction: Add a /listen command to accept voice instructions, turning the CLI into a true conversational assistant.

Installation
For Development (Recommended)
git clone [https://github.com/kaiors1/groq_agent.git](https://github.com/kaiors1/groq_agent.git)
cd groq_agent
npm install
npm run build
npm link      # Enables the `groq` command in any directory

# Run this in the background during development to automatically apply any changes to the source code
npm run dev

Usage
# Start a chat session
groq

Command Line Options
groq [options]

Options:
  -t, --temperature <temp>    Temperature for generation (default: 1)
  -s, --system <message>      Custom system message
  -d, --debug                 Enable debug logging to debug-agent.log in the current directory
  -p, --proxy <url>           Proxy URL (e.g., http://proxy:8080 or socks5://proxy:1080)
  -h, --help                  Display help
  -V, --version               Display version number

Authentication
On first use, start a chat:

groq

And type the /login command:

Get your API key from the <strong>Groq Console</strong> here

This creates a .groq/ folder in your home directory that stores your API key, default model selection, and any other configuration you wish to add.

You can also set your API key for the current directory via an environment variable:

export GROQ_API_KEY=your_api_key_here

Proxy Configuration
Supports HTTP/HTTPS/SOCKS5 proxies via CLI flag or environment variables:

# CLI flag (highest priority)
groq --proxy http://proxy:8080
groq --proxy socks5://proxy:1080

# Environment variables
export HTTP_PROXY=http://proxy:8080
export HTTPS_PROXY=socks5://proxy:1080

Priority: --proxy > HTTPS_PROXY > HTTP_PROXY

Available Commands
/help - Show help and available commands

/login - Login with your credentials

/model - Select your Groq model

/clear - Clear chat history and context

/reasoning - Toggle display of reasoning in messages

/stats - Display session statistics and token usage

/save [name] - Save the current session

/load <name> - Load a session

/sessions - List all saved sessions

Development
Local Testing
# Run this in the background during development to automatically apply any changes to the source code
npm run dev

Available Scripts
npm run build     # Compile TypeScript to dist/
npm run dev       # Compile in "watch" mode

Project Structure
groq-code-cli/
├── src/
│   ├── commands/
│   │   ├── definitions/      # Individual command implementations
│   │   │   ├── clear.ts      # Command to clear history
│   │   │   ├── help.ts       # Help command
│   │   │   ├── login.ts      # Authentication command
│   │   │   ├── model.ts      # Model selection command
│   │   │   └── reasoning.ts  # Reasoning toggle command
│   │   ├── base.ts           # Base command interface
│   │   └── index.ts          # Command exports
│   ├── core/
│   │   ├── agent.ts          # AI agent implementation
│   │   └── cli.ts            # CLI entry point and setup
│   ├── tools/
│   │   ├── tool-schemas.ts   # Tool schema definitions
│   │   ├── tools.ts          # Tool implementations
│   │   └── validators.ts     # Input validation utilities
│   ├── ui/
│   │   ├── App.tsx           # Main application component
│   │   ├── components/
│   │   │   ├── core/         # Core TUI chat components
│   │   │   ├── display/      # Auxiliary components for TUI
│   │   │   └── input-overlays/ # Input overlays and modals
│   │   └── hooks/
│   └── utils/
│       ├── constants.ts      # Application constants
│       ├── file-ops.ts       # File system operations
│       ├── local-settings.ts # Local configuration management
│       └── markdown.ts       # Markdown processing utilities
├── docs/
├── package.json
├── tsconfig.json
└── LICENSE

TL;DR: Start with src/core/cli.ts (main entry point), src/core/agent.ts, and src/ui/hooks/useAgent.ts (bridge between TUI and agent). Tools are in src/tools/, slash commands are in src/commands/definitions/, and customize the TUI in src/ui/components/.

Customization
Adding New Tools
Tools are AI-callable functions that extend the CLI's capabilities. To add a new tool:

Define the schema in src/tools/tool-schemas.ts:

export const YOUR_TOOL_SCHEMA: ToolSchema = {
  type: 'function',
  function: {
    name: 'your_tool_name',
    description: 'What your tool does',
    parameters: {
      type: 'object',
      properties: {
        param1: { type: 'string', description: 'Parameter description' }
      },
      required: ['param1']
    }
  }
};

Implement the function in src/tools/tools.ts:

export async function yourToolName(param1: string): Promise<ToolResult> {
  // Your implementation here
  return createToolResponse(true, result, 'Success message');
}

Register the tool in the TOOL_REGISTRY object and the executeTool switch statement in src/tools/tools.ts.

Add the schema to the ALL_TOOL_SCHEMAS array in src/tools/tool-schemas.ts.

Adding New Slash Commands
Slash commands provide direct user interactions. To add a new command:

Create the definition in src/commands/definitions/your-command.ts:

import { CommandDefinition, CommandContext } from '../base.js';

export const yourCommand: CommandDefinition = {
  command: 'yourcommand',
  description: 'What your command does',
  handler: ({ addMessage }: CommandContext) => {
    // Your logic here
    addMessage({
      role: 'system',
      content: 'Command response'
    });
  }
};

Register the command in src/commands/index.ts by importing it and adding it to the availableCommands array.

Changing the Start Command
To change the start command from groq, modify "groq" in the "bin" field of package.json to your preferred global command.

Run npm run build and npm link again.
