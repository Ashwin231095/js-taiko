import { step, openTab, closeTab } from "taiko";

step("Open Tab <url>", async function(url) {
	await openTab(url);
});

step("Close Tab <url>", async function(url) {
	await closeTab(url);
});