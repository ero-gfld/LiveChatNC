import { CommandInteraction, EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { QueueType } from '../../services/prisma/loadPrisma';
import { getContentInformationsFromUrl } from '../../services/content-utils';
import { getDisplayMediaFullFromGuildId, getDurationFromGuildId } from '../../services/utils';

export const sendCommand = () => ({
  data: new SlashCommandBuilder()
    .setName(rosetty.t('sendCommand')!)
    .setDescription(rosetty.t('sendCommandDescription')!)
    .addStringOption((option) =>
      option.setName(rosetty.t('sendCommandOptionURL')!).setDescription(rosetty.t('sendCommandOptionURLDescription')!),
    )
    .addAttachmentOption((option) =>
      option
        .setName(rosetty.t('sendCommandOptionMedia')!)
        .setDescription(rosetty.t('sendCommandOptionMediaDescription')!),
    )
    .addStringOption((option) =>
      option
        .setName(rosetty.t('sendCommandOptionText')!)
        .setDescription(rosetty.t('sendCommandOptionTextDescription')!)
        .setRequired(false),
    )
    .addIntegerOption((option) =>
      option
        .setName(rosetty.t('sendCommandOptionDuration')!)
        .setDescription(rosetty.t('sendCommandOptionDurationDescription')!)
        .setRequired(false),
    )
    .addBooleanOption((option) =>
      option
        .setName(rosetty.t('sendCommandOptionHide')!)
        .setDescription(rosetty.t('sendCommandOptionHideDescription')!)
        .setRequired(false),
    ),
  handler: async (interaction: CommandInteraction) => {
    const url = interaction.options.get(rosetty.t('sendCommandOptionURL')!)?.value;
    const text = interaction.options.get(rosetty.t('sendCommandOptionText')!)?.value;
    const media = interaction.options.get(rosetty.t('sendCommandOptionMedia')!)?.attachment?.proxyURL;
    const duration = interaction.options.get(rosetty.t('sendCommandOptionDuration')!)?.value;
    const hidden = interaction.options.get(rosetty.t('sendCommandOptionHide')!)?.value ?? false;

    let mediaContentType = interaction.options.get(rosetty.t('sendCommandOptionMedia')!)?.attachment?.contentType;
    let mediaDuration = interaction.options.get(rosetty.t('sendCommandOptionMedia')!)?.attachment?.duration;

    let additionalContent;
    if ((!mediaContentType || !mediaDuration) && (media || url)) {
      additionalContent = await getContentInformationsFromUrl((media || url) as string);
    }

    if ((mediaContentType === undefined || mediaContentType === null) && additionalContent?.contentType) {
      mediaContentType = additionalContent.contentType;
    }

    if ((mediaContentType === undefined || mediaDuration === null) && additionalContent?.mediaDuration) {
      mediaDuration = additionalContent.mediaDuration;
    }

    await prisma.queue.create({
      data: {
        content: JSON.stringify({
          url,
          text,
          media,
          mediaContentType,
        }),
        type: QueueType.MESSAGE,
        author: interaction.user.username,
        authorImage: interaction.user.avatarURL(),
        discordGuildId: interaction.guildId!,
        duration: await getDurationFromGuildId(duration, interaction.guildId!),
        hidden: hidden,
      },
    });

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(rosetty.t('success')!)
          .setDescription(rosetty.t('sendCommandAnswer')!)
          .setColor(0x2ecc71),
      ],
      ephemeral: true,
    });
  },
});
