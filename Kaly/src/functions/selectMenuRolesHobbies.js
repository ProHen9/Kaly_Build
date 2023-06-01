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
exports.selectMenuRoles = void 0;
const selectMenuRoles = (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (interaction.values.includes("1")) {
        (_a = interaction.guild) === null || _a === void 0 ? void 0 : _a.members.addRole({ role: "1099710398703341639", user: interaction.user, reason: "Du hast die Rolle im Menu ausgewählt!" });
    }
    else {
        (_b = interaction.guild) === null || _b === void 0 ? void 0 : _b.members.removeRole({ role: "1099710398703341639", user: interaction.user, reason: "Du hast die Rolle im Menu nicht ausgewählt!" });
    }
    if (interaction.values.includes("2")) {
        (_c = interaction.guild) === null || _c === void 0 ? void 0 : _c.members.addRole({ role: "1099738033735082155", user: interaction.user, reason: "Du hast die Rolle im Menu ausgewählt!" });
    }
    else {
        (_d = interaction.guild) === null || _d === void 0 ? void 0 : _d.members.removeRole({ role: "1099738033735082155", user: interaction.user, reason: "Du hast die Rolle im Menu nicht ausgewählt!" });
    }
    if (interaction.values.includes("3")) {
        (_e = interaction.guild) === null || _e === void 0 ? void 0 : _e.members.addRole({ role: "1099737983441174618", user: interaction.user, reason: "Du hast die Rolle im Menu ausgewählt!" });
    }
    else {
        (_f = interaction.guild) === null || _f === void 0 ? void 0 : _f.members.removeRole({ role: "1099737983441174618", user: interaction.user, reason: "Du hast die Rolle im Menu nicht ausgewählt!" });
    }
    if (interaction.values.includes("4")) {
        (_g = interaction.guild) === null || _g === void 0 ? void 0 : _g.members.addRole({ role: "1099737905406152737", user: interaction.user, reason: "Du hast die Rolle im Menu ausgewählt!" });
    }
    else {
        (_h = interaction.guild) === null || _h === void 0 ? void 0 : _h.members.removeRole({ role: "1099737905406152737", user: interaction.user, reason: "Du hast die Rolle im Menu nicht ausgewählt!" });
    }
});
exports.selectMenuRoles = selectMenuRoles;
