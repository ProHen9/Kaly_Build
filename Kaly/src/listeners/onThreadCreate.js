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
exports.onThradCreate = void 0;
const discord_js_1 = require("discord.js");
const onThradCreate = (client) => __awaiter(void 0, void 0, void 0, function* () {
    client.on("threadCreate", (thread) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        console.log("neuer thread");
        if (((_a = thread.parent) === null || _a === void 0 ? void 0 : _a.type) === discord_js_1.ChannelType.GuildForum) {
            console.log(thread.parentId);
            console.log(thread.id);
            console.log(thread.name);
        }
        if (((_b = thread.parent) === null || _b === void 0 ? void 0 : _b.type) === discord_js_1.ChannelType.GuildText) {
        }
    }));
});
exports.onThradCreate = onThradCreate;
