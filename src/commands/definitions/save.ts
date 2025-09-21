import { CommandDefinition, CommandContext } from '../base.js';

export const saveCommand: CommandDefinition = {
  command: 'save',
  description: 'Saves the current chat session. Usage: /save [session_name]',
  handler: ({ agent, command, addMessage }: CommandContext) => {
    const sessionName = command.split(' ')[1] || 'default';
    try {
      agent.saveSession(sessionName);
      addMessage({
        role: 'system',
        content: `Session saved as '${sessionName}'.`,
      });
    } catch (error) {
      addMessage({
        role: 'system',
        content: `Error saving session: ${(error as Error).message}`,
      });
    }
  },
};