export const enLang = {
  commandError: 'Issue with this command ! Please check logs !',
  i18nLoaded: 'English language loaded !',
  serverStarted: 'Server started !',
  success: 'Success !',
  error: 'Error !',
  notAllowed: 'Not allowed !',

  discordCommands: 'Load Discord commands',
  discordCommandLoaded: 'Command loaded : /{{command}} ✅',
  discordInvite: 'To invite bot : {{link}}',
  discordBotReady: 'Ready ! Logged in as {{username}}',

  howToUseTitle: 'How to use it ?',
  howToUseDescription:
    'To use it, you need first to do a `/client` to have the link to integrate to your OBS, XSplit.\n\nAfter that you can do a `/help` to get all commands that you can use to send content to the stream.',

  aliveCommand: 'alive',
  aliveCommandDescription: 'Check if bot is alive',
  aliveCommandsAnswer: "{{username}}, I'm alive !",

  clientCommand: 'client',
  clientCommandDescription: 'Get OBS link to integrate LiveChat',
  clientCommandsAnswer: 'Here is the link : {{link}}',

  sendCommand: 'send',
  sendCommandDescription: 'Send content to stream',
  sendCommandOptionURL: 'link',
  sendCommandOptionURLDescription: 'Link to the content to display',
  sendCommandOptionText: 'text',
  sendCommandOptionTextDescription: 'Text to display',
  sendCommandOptionMedia: 'media',
  sendCommandOptionMediaDescription: 'Media to display',
  sendCommandOptionDuration: 'duration',
  sendCommandOptionDurationDescription: 'Duration to display (In seconds)',
  sendCommandOptionHide: 'hide',
  sendCommandOptionHideDescription: 'Hide content',
  sendCommandAnswer: 'Content received ! Will be played soon !',

  talkCommand: 'talk',
  talkCommandDescription: 'Ask a bot to say something',
  talkCommandOptionText: 'text',
  talkCommandOptionTextDescription: 'Text to display',
  talkCommandOptionVoice: 'voice',
  talkCommandOptionVoiceDescription: 'Text to say',
  talkCommandOptionHide: 'hide',
  talkCommandOptionHideDescription: 'Hide content',
  talkCommandAnswer: 'Content received ! Will be played soon !',

  setDefaultTimeCommand: 'config-defaulttime',
  setDefaultTimeCommandDescription:
    'Set default time for display (Default : 5 seconds)  (In seconds) | 0 will reset value to default',
  setDefaultTimeCommandOptionText: 'number',
  setDefaultTimeCommandOptionTextDescription: 'Number of seconds',
  setDefaultTimeCommandAnswer: 'Default time set !',

  setMaxTimeCommand: 'config-maxtime',
  setMaxTimeCommandDescription: 'Set max time for display (In seconds) | 0 will reset value to default',
  setMaxTimeCommandOptionText: 'number',
  setMaxTimeCommandOptionTextDescription: 'Number of seconds',
  setMaxTimeCommandAnswer: 'Max time set !',

  stopCommand: 'stop',
  stopCommandDescription: 'Remove content displayed',
  stopCommandAnswer: 'Content removed',
};
