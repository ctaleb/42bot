const execute = function(msg, to_find) {
    msg.channel.send(`Searching for [${to_find}]...`);
}

module.exports = {
    execute: execute
}