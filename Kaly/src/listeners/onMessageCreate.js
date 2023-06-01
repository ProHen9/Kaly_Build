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
exports.onMessageCreate = void 0;
const point_system_1 = require("../point-system/");
const dmQuestion_1 = require("../question-service/dmQuestion");
const onMessageCreate = (client) => {
    client.on("messageCreate", (message) => __awaiter(void 0, void 0, void 0, function* () {
        (0, point_system_1.givePoint)(message), (0, dmQuestion_1.dmQuestion)(message);
    }));
};
exports.onMessageCreate = onMessageCreate;
