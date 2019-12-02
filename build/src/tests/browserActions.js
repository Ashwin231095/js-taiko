"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taiko_1 = require("taiko");
taiko_1.step("Open Tab <url>", async function (url) {
    await taiko_1.openTab(url);
});
taiko_1.step("Close Tab <url>", async function (url) {
    await taiko_1.closeTab(url);
});
