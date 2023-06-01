"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application_id = exports.Server_id = exports.Token = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.Token = process.env.TOKEN || "";
exports.Server_id = process.env.SERVER_ID || "";
exports.Application_id = process.env.APLLICATION_ID || "";
