const SerpWow = require('google-search-results-serpwow');

let serpwow = new SerpWow('CCA26AADDB2E492B8EA601FDF04E9E43');

const execute = function(msg, to_find) {
    msg.channel.send(`Searching for [${to_find}]...`);
	to_find += ' site:myanimelist.net'
	console.log(to_find);
	var json = serpwow.json(
		{
		  q: to_find,
		  num: 1,
		  location: 'New York,New York,United States'
		})
		.then(result => {
		  // pretty-print the result
		  console.log(JSON.stringify(result, 0, 2));
		})
		.catch(error => {
		  // print the error
		  console.log(error);
		});
	console.log(json.link);
}

module.exports = {
    execute: execute
}