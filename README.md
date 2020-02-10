# libquery

libquery is a NodeJS library for queries on different game servers

## Installation

```bash
npm i libquery
```

## Usage

```js
const libquery = require("libquery");

libquery.query("play.futonium.fr", 19132).then((data) => {
	console.log("Done!\nServer is in " + data.version);
}).catch((err) => {
	console.log("An error occured!\n " + err.message);
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)