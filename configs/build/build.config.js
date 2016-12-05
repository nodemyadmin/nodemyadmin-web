'use strict';

var path = require('path');

var sourceDirPath = "../../";
var sourceDir = path.join(__dirname, sourceDirPath, 'src');

module.exports = {
	"product": path.join(sourceDirPath, "package.json"),
	"index": path.join(sourceDir, "index.html"),
	"vendor": path.join(sourceDir, 'vendor'),
	"app": path.join(sourceDir, 'app'),
	"dist": path.join(sourceDir, '..', 'dist')
};
