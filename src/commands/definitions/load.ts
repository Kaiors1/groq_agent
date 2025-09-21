import { CommandDefinition, CommandContext } from '../base.js';

export const loadCommand: CommandDefinition = {
  command: 'load',
  description: 'Loads a saved chat session. Usage: /load <session_name>',
  handler: ({ agent, command, addMessage }: CommandContext) => {
    const sessionName = command.split(' ')[1];
    if (!sessionName) {
      addMessage({
        role: 'system',
        content: 'Usage: /load <session_name>',
      });
      return;
    }

    try {
      agent.loadSession(sessionName);
      addMessage({
        role: 'system',
        content: `Session '${sessionName}' loaded successfully. The previous chat history has been replaced.`,
      });
    } catch (error) {
      addMessage({
        role: 'system',
        content: `Error loading session: ${(error as Error).message}`,
      });
    }
  },
};