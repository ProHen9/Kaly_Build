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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.givePoint = void 0;
const discord_js_1 = require("discord.js");
const firestore_1 = require("firebase/firestore");
const firestore_2 = require("../../firestore");
const fs_1 = __importDefault(require("fs"));
const point_system_json_1 = __importDefault(require("C:/Users/Hen9/Desktop/\u200E/coden/Kaly/logs/point-system.json"));
const db = (0, firestore_1.getFirestore)(firestore_2.app);
const userDataRef = (0, firestore_1.collection)(db, "points");
const addPoint = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const user = msg.author.username;
    const id = msg.author.discriminator;
    const docRef = (0, firestore_1.doc)(db, "points", `${user}#${id}`);
    const docSnap = yield (0, firestore_1.getDoc)(docRef);
    // probieren das Dokument zu bekommen
    if (docSnap.exists()) {
        const data = docSnap.data();
        let points = data.points;
        points + 5;
        yield (0, firestore_1.updateDoc)(docRef, { points: docSnap.data().points + 5 });
    }
    else {
        yield (0, firestore_1.setDoc)(docRef, { user: "henri", points: 5 });
        let log = point_system_json_1.default.create;
        const newObj = {
            user: `${user}#${id}`,
            points: 5,
        };
        log.push(newObj);
        let objWithArray = { create: log };
        fs_1.default.writeFile("C:/Users/Hen9/Desktop/‎/coden/Kaly/logs/point-system.json", JSON.stringify(objWithArray), function (err) {
            if (err) {
                console.log(err);
                return;
            }
        });
    }
});
const givePoint = (message) => __awaiter(void 0, void 0, void 0, function* () {
    if (message.author.bot == true) {
        return;
    }
    else if (message.content.startsWith("/") ||
        message.content.startsWith("!")) {
        return;
    }
    else if (message.channel.type === discord_js_1.ChannelType.DM) {
        return;
    }
    else {
        addPoint(message);
    }
});
exports.givePoint = givePoint;
