const setup = require("./setup");

function isConfigured() {
    // Do Nothing
    return false;
}

function scheduleUpdate() {
    setInterval(() => {setup.configureHost()}, 10000);
}

exports.isConfigured = isConfigured;
exports.scheduleUpdate = scheduleUpdate;