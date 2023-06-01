"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onReadyMessages = void 0;
const roleMessage_1 = require("./roleMessage");
// Was sind onReadyMessages? OnReadyMessages sind Nachrichten, die gesendet werden, wenn der Bt angeschalten wird.
const onReadyMessages = (client) => {
    (0, roleMessage_1.roleMessage)(client);
};
exports.onReadyMessages = onReadyMessages;
