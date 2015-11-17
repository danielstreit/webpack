var path = require("path");
module.exports = {
	entry: {
		lib: './lib'
	},
	output: {
		path: path.join(__dirname, "js"),
		filename: "[name].js",
		library: "[name]",
		libraryTarget: "umd"
	}
}