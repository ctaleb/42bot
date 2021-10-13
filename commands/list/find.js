const google = require('googlethis');

const execute = async function(msg, to_find) {
    msg.channel.send(`Searching for [${to_find}]...`);
	to_find += ' site:myanimelist.net'
	console.log(to_find);
	const options = {
		page: 0, 
		safe: false, // hide explicit results?
	}
	const response = await google.search(to_find, options);
	console.log(response);
  	console.log(response.results[0].url);
}

module.exports = {
    execute: execute
}