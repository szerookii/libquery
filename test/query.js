const libquery = require("../");

libquery.query("play.futonium.fr", 19132).then((data) => {
	console.log("Done!\nServer is in " + data.version);
}).catch((err) => {
	console.log("An error occured!\n " + err.message);
});