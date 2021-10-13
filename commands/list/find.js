const SerpWow = require('google-search-results-serpwow');

let serpwow = new SerpWow('CCA26AADDB2E492B8EA601FDF04E9E43');

const execute = function(msg, to_find) {
    msg.channel.send(`Searching for [${to_find}]...`);
	to_find += ' site:myanimelist.net'
	console.log(to_find);
	serpwow.json(
		{
		  q: to_find,
		  num: 1,
		  location: 'Paris,Paris,Ile-de-France,France'
		})
		.then(result => {
		  // pretty-print the result
		  console.log(JSON.stringify(result, 0, 2));
		  console.log(result.organic_results[0].link);
		})
		.catch(error => {
		  // print the error
		  console.log(error);
		});
}

module.exports = {
    execute: execute
}