import { CommandDefinition, CommandContext } from '../base.js';

export const sessionsCommand: CommandDefinition = {
  command: 'sessions',
  description: 'Lists all saved chat sessions.',
  handler: ({ agent, addMessage }: CommandContext) => {
    try {
      const sessionNames = agent.listSessions();
      if (sessionNames.length === 0) {
        addMessage({
          role: 'system',
          content: 'No saved sessions found.',
        });
        return;
      }
      const sessionList = sessionNames.map((name: string) => `- ${name}`).join('\n');
      addMessage({
        role: 'system',
        content: `Saved sessions:\n${sessionList}`,
      });
    } catch (error) {
      addMessage({
        role: 'system',
        content: `Error listing sessions: ${(error as Error).message}`,
      });
    }
  },
};
