"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taiko_1 = require("taiko");
taiko_1.step('Navigate to <url>', async (url) => {
    await taiko_1.goto(url);
});
