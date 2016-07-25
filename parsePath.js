var fs = require('fs');

var config = fs.createReadStream('./webpack.config.js'),
	inHtml = fs.createReadStream('./app/index.html'),
	outHtml = fs.createWriteStream('./bundle/index.html');

config.on('data', (data) => {

	var publicPath = (() => {

		var dataStr = data.toString();

		dataStr = dataStr.split('publicPath:')[1].split(',')[0].split('\'')[1];

		return dataStr;

	})();

	if (publicPath.substr(0,1) !== '/') {
		return;
	}

	var pathReg = new RegExp(publicPath, 'g');

	inHtml.on('data', (data0) => {
		outHtml.write(data0.toString().replace(pathReg, './'));
	});

	var cssData = fs.readFileSync('./bundle/bundle.css', 'utf8');
	cssData = cssData.replace(pathReg, './');
	
	fs.writeFile('./bundle/bundle.css', cssData, (err) => {
		if (err) {
			console.log(err);
		}
	});

	var jsData = fs.readFileSync('./bundle/bundle.js', 'utf8');
	jsData = jsData.replace(pathReg, './');

	fs.writeFile('./bundle/bundle.js', jsData, (err) => {
		if (err) {
			console.log(err);
		}
	});
});
