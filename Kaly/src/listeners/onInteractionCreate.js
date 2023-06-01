"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onInteractionCreate = void 0;
const slashcommands_1 = require("../slashcommands/");
const selectMenuRolesHobbies_1 = require("../functions/selectMenuRolesHobbies");
const onInteractionCreate = (client) => {
    client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
        // SlashCommand Handler
        const handleSlashCommand = (interaction) => __awaiter(void 0, void 0, void 0, function* () {
            const slashCommand = slashcommands_1.slashcommand.find((command) => command.command.name == interaction.commandName);
            if (!slashCommand) {
                yield interaction.reply({
                    content: "Der Kommand wurde nicht gefunden.",
                    ephemeral: true,
                });
                return;
            }
            yield slashCommand.run(interaction);
        });
        if (interaction.isCommand()) {
            handleSlashCommand(interaction);
        }
        // das handeln von Select Menus
        if (interaction.isStringSelectMenu()) {
            // Custom-Id bekommen
            const { customId } = interaction;
            // Hobbies
            if (customId == "HobbySelectMenu") {
                (0, selectMenuRolesHobbies_1.selectMenuRoles)(interaction);
                yield interaction.reply({
                    content: "Deine Auswahl wurde angenomen!",
                    ephemeral: true,
                });
            }
            else if (customId == "GeschlehtSelectMenu") {
            }
        }
    }));
};
exports.onInteractionCreate = onInteractionCreate;
