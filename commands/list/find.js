var google = require('google');

google.resultsPerPage = 1;

const execute = function(msg, to_find) {
    msg.channel.send(`Searching for [${to_find}]...`);
	to_find += ' site:myanimelist.net'
	google(to_find , function (err, res){
		var link = res.links[0];
		console.log(link);
	})
}

module.exports = {
    execute: execute
}