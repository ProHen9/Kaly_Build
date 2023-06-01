"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMessage = void 0;
const discord_js_1 = require("discord.js");
const roleMessage = (client) => {
    const selectGeschlecht = new discord_js_1.StringSelectMenuBuilder({
        custom_id: "GeschlehtSelectMenu",
        placeholder: "Wähle dein Geschlecht aus",
        max_values: 1,
        options: [
            { label: "Männlich", value: "1" },
            { label: "Weiblich", value: "2" },
            {
                label: "irgendwas dazwischen oder ganz auserhalb",
                value: "3",
                description: "Ich fühle mich nicht wie eine männliche Person als auch nicht wie eine weibliche Person.",
            },
        ],
    });
    const GeschlechterRow = new discord_js_1.ActionRowBuilder().addComponents(selectGeschlecht);
    const messageChannel = client.channels.cache.get("1099421181121146942");
    //  messageChannel?.send({content: "**Hier kannst du deine Rollen auswählen**\n\n\n*Bitte fühle dich aber nicht gezwungen so viele Infos wie möglich über deine Persönlichkeit preiszugeben.*\n\n**Geschlecht:**", components: [GeschlechterRow]});
    const selectAlter = new discord_js_1.StringSelectMenuBuilder({
        custom_id: "AlterSelectMenu",
        placeholder: "Wähle dein Alter aus:",
        max_values: 1,
        options: [
            { label: "über 13", value: "1" },
            { label: "über 16", value: "2" },
            { label: "über 18", value: "3" },
            { label: "über 24", value: "4" },
            { label: "über 30", value: "5" },
            { label: "über 40", value: "6" },
            { label: "über 50 & älter", value: "7" },
        ],
    });
    const AlterRow = new discord_js_1.ActionRowBuilder().addComponents(selectAlter);
    // messageChannel?.send({content: "**Alter:**", components: [AlterRow]});
    const selectHobby = new discord_js_1.StringSelectMenuBuilder({
        custom_id: "HobbySelectMenu",
        placeholder: "Wähle dein/e Hobby/s aus:",
        min_values: 0,
        max_values: 4,
        options: [
            { label: "Sport", value: "1", emoji: "🚴‍♂️" },
            { label: "zocken", value: "2", emoji: "🕹️" },
            { label: "coden", value: "3", emoji: "🖥️" },
            { label: "lernen ", value: "4", emoji: "💀" },
        ],
    });
    const HobbyRow = new discord_js_1.ActionRowBuilder().addComponents(selectHobby);
    // messageChannel?.send({content: "**Hobby/s:**", components: [HobbyRow]});
};
exports.roleMessage = roleMessage;
