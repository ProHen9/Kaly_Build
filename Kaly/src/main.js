"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const onReady_1 = require("./listeners/onReady");
const config_1 = require("./config");
const onMessageCreate_1 = require("./listeners/onMessageCreate");
const onInteractionCreate_1 = require("./listeners/onInteractionCreate");
const client = new discord_js_1.Client({ intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.MessageContent,
        discord_js_1.GatewayIntentBits.GuildMembers,
        discord_js_1.GatewayIntentBits.GuildModeration,
        discord_js_1.GatewayIntentBits.GuildEmojisAndStickers,
        discord_js_1.GatewayIntentBits.DirectMessages
    ], });
// Events
(0, onReady_1.onReady)(client);
// in diesem Event befinden sich zudem das Punktesystem
(0, onMessageCreate_1.onMessageCreate)(client);
// SlashCommands werden hier eingefügt
(0, onInteractionCreate_1.onInteractionCreate)(client);
client.login(config_1.Token);
