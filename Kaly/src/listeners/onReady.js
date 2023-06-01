"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onReady = void 0;
const slashcommands_1 = require("../slashcommands");
const onReadyMessges_1 = require("../onReadyMessges");
const onReady = (client) => {
    client.on("ready", () => {
        var _a;
        console.log("Ich bin nun online :)");
        // Slashcommands regestrieren
        const commands = slashcommands_1.slashcommand.map(slashcommand => slashcommand.command.toJSON());
        (_a = client.application) === null || _a === void 0 ? void 0 : _a.commands.set(commands);
        // Anfangsmessages
        (0, onReadyMessges_1.onReadyMessages)(client);
    });
};
exports.onReady = onReady;
