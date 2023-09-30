"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPermissionMessages = void 0;
const platform_1 = __importDefault(require("platform"));
const messages_1 = __importDefault(require("./messages"));
function getPermissionMessages(functionality, 
// options
{ purpose, locale = "en", }) {
    // detect platform and browser
    const message = (0, messages_1.default)(locale)[functionality] || undefined;
    if (!message) {
        return {
            deniedMessage: `Permission to ${functionality} was denied.`,
            purpose: purpose ||
                `Please allow access to the ${functionality} to use this feature.`,
            steps: [],
        };
    }
    const platformMessages = message.steps.sort((a, b) => calculateScore(a.platform, a.browser) >
        calculateScore(b.platform, b.browser)
        ? -1
        : 1);
    console.log(platformMessages);
    return {
        deniedMessage: message.deniedMessage,
        steps: platformMessages[0].steps,
    };
}
exports.getPermissionMessages = getPermissionMessages;
function calculateScore(p, b) {
    var _a, _b, _c;
    const currentOs = (_b = (_a = platform_1.default.os) === null || _a === void 0 ? void 0 : _a.family) === null || _b === void 0 ? void 0 : _b.toString().toLowerCase();
    const currentBrowser = (_c = platform_1.default.name) === null || _c === void 0 ? void 0 : _c.toLowerCase();
    let score = 0;
    if (currentOs === null || currentOs === void 0 ? void 0 : currentOs.includes(p)) {
        score += 1;
    }
    if (currentBrowser === null || currentBrowser === void 0 ? void 0 : currentBrowser.includes(b)) {
        score += 1;
    }
    return score;
}
