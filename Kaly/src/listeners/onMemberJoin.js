"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onMemberJoin = void 0;
const onMemberJoin = (client) => {
    client.on("guildMemberAdd", (member) => {
        const welcomeChannel = client.channels.cache.get("1097241612339384473");
        welcomeChannel.send(`Hey ho, wir haben einen neuen Mitglied. Wir freuen uns auf eine nette Zeit mit dir @${member.displayName}!`);
    });
};
exports.onMemberJoin = onMemberJoin;
