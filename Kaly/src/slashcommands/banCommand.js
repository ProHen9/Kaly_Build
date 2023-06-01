"use strict";
// import {
//   StringSelectMenuBuilder,
//   ActionRowBuilder,
// } from "discord.js";
// import { SlashCommand } from "../types";
// import { SlashCommandBuilder } from "@discordjs/builders";
// export const banCommand: SlashCommand = {
//   command: new SlashCommandBuilder()
//     .setName("bancommand")
//     .setDescription("Einen User bannen"),
//   async run(interaction) {
//     const selectMenu = new StringSelectMenuBuilder({
//       custom_id: 'a cool select menu',
//       placeholder: 'select an option',
//       max_values: 2,
//       options: [
//         { label: 'option 1', value: '1' },
//         { label: 'option 2', value: '2' },
//         { label: 'option 3', value: '3' },
//       ],
//     });
//     const row = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(selectMenu);
//     await interaction.reply({
//       content: "Here is a select menu:",
//       components: [row],
//     });
//   },
// };
