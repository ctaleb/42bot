var google = require('google');

google.resultsPerPage = 25;

const execute = function(msg, to_find) {
    msg.channel.send(`Searching for [${to_find}]...`);
	to_find += ' site:myanimelist.net'
	console.log(to_find);
	google(to_find , function (err, res){
		if (err) console.error(err)
		var link = res.links[0];
		console.log(res.links.length);
		console.log(link);
	})
}

module.exports = {
    execute: execute
}