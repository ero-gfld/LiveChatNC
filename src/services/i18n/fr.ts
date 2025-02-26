import { enLang } from './en';

export const frLang: typeof enLang = {
  commandError: 'Problème avec cette commande ! Veuillez vérifier les logs !',
  i18nLoaded: 'Langue française chargée !',
  serverStarted: 'Le serveur est lancé !',
  success: 'Succès !',
  error: 'Erreur !',
  notAllowed: 'Action non autorisée !',

  discordCommands: 'Chargement des commandes Discord',
  discordCommandLoaded: 'Commande chargée : /{{command}} ✅',
  discordInvite: 'Pour inviter le bot : {{link}}',
  discordBotReady: 'En ligne ! Connecté en tant que {{username}}',

  howToUseTitle: "Comment m'utiliser ?",
  howToUseDescription:
    "Pour m'utiliser, vous devez d'abord faire un `/client` pour avoir le lien à intégrer sur votre OBS ou XSplit.\n\nAprès, vous pouvez faire un `/help` pour obtenir toutes les commandes que vous pouvez utiliser pour envoyer du contenu sur le stream.",

  aliveCommand: 'dispo',
  aliveCommandDescription: 'Vérifiez si le bot est vivant',
  aliveCommandsAnswer: '{{username}}, Je suis en vie !',

  clientCommand: 'client',
  clientCommandDescription: 'Obtenez un lien OBS pour intégrer LiveChat',
  clientCommandsAnswer: 'Voici le lien : {{link}}',

  sendCommand: 'msg',
  sendCommandDescription: 'Envoyer du contenu sur le stream',
  sendCommandOptionURL: 'lien',
  sendCommandOptionURLDescription: 'Lien du contenu sur le stream',
  sendCommandOptionText: 'texte',
  sendCommandOptionTextDescription: 'Texte à afficher',
  sendCommandOptionMedia: 'média',
  sendCommandOptionMediaDescription: 'Média à afficher',
  sendCommandOptionDuration: 'durée',
  sendCommandOptionDurationDescription: "Durée d'affichage (En secondes)",
  sendCommandOptionHide: 'cacher',
  sendCommandOptionHideDescription: 'Cacher le contenu',
  sendCommandAnswer: 'Contenu reçu ! Il sera bientôt joué !',

  talkCommand: 'dire',
  talkCommandDescription: 'Demandez à un bot de dire quelque chose',
  talkCommandOptionText: 'texte',
  talkCommandOptionTextDescription: 'Texte à afficher',
  talkCommandOptionVoice: 'dire',
  talkCommandOptionVoiceDescription: 'Texte à dire',
  talkCommandOptionHide: 'cacher',
  talkCommandOptionHideDescription: 'Cacher le contenu',
  talkCommandAnswer: 'Contenu reçu ! Il sera bientôt joué !',

  setDefaultTimeCommand: 'config-defaut',
  setDefaultTimeCommandDescription:
    "Définir le temps par défaut pour l'affichage (Par défaut : 5 seconds) | 0 remet la valeur par défaut",
  setDefaultTimeCommandOptionText: 'nombre',
  setDefaultTimeCommandOptionTextDescription: 'Nombre de seconds',
  setDefaultTimeCommandAnswer: 'Le temps par défaut défini !',

  setMaxTimeCommand: 'config-max',
  setMaxTimeCommandDescription:
    "Définir le temps maximal pour l'affichage (En secondes) | 0 remet la valeur par défaut",
  setMaxTimeCommandOptionText: 'nombre',
  setMaxTimeCommandOptionTextDescription: 'Nombre de seconds',
  setMaxTimeCommandAnswer: 'Temps maximum défini !',

  stopCommand: 'stop',
  stopCommandDescription: 'Supprime le média',
  stopCommandAnswer: 'Média interrompu !',
};
