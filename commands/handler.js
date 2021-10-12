const ping = require('./list/ping');
const find = require('./list/find');

function argsToString(args) {
	var str = "";
	for (let i = 1; i < args.length; i++)
	{
		str += args[i];
		str += " ";
	}
	return str.substr(0, str.length - 1);
}

const handleCommand = function(msg) {
	if (msg.content.charAt(0) != '!') return;

	var args = msg.content.split(' ');
	var cmd = args[0].substr(1);

	console.log(`handling command ${msg.content.substr(1)}`);
	
	switch(cmd) {
		case 'ping':
			ping.execute(msg);
			break;
		case 'find':
			find.execute(msg, argsToString(args));
			break;
		default:
			msg.channel.send('❌ Command not found ❌');
			break;
	}
}

module.exports = {
	handleCommand: handleCommand
}