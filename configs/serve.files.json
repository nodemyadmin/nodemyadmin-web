{
	"lint": {
		"json": {
			"files": ["./*.json", "./configs/*.json"]
		},
		"js": {
			"rules": "./configs/lints/.jshintrc",
			"ignore": [],
			"files": [
				"./configs/**/*.js",
				"./client/app/**/*.js",
				"./client/components/**/*.js",
				"./install/**/*.js"
			]
		},
		"jscs": {
			"rules": "./configs/lints/.jscsrc",
			"files": [
				"./configs/**/*.js",
				"./client/app/**/*.js",
				"./client/components/**/*.js",
				"./install/**/*.js"
			]
		},
		"css": {
			"rules": "./configs/lints/.csslintrc",
			"ignore": [],
			"files": [
				"./client/stylesheets/css/**/*.css"
			]
		},
		"html": {
			"gateway": {
				"rules": "./configs/lints/.htmlhint-g-rc",
				"ignore": [],
				"files": [
					"./client/index.html"
				]
			},
			"templates": {
				"rules": "./configs/lints/.htmlhint-t-rc",
				"ignore": [],
				"files": [
					"./client/app/**/*.html",
					"./client/components/**/*.html"
				]
			}
		}
	},
	"compile": {
		"less": {
			"dev": {
				"options": {
					"compress": false
				},
				"files": {
					"./client/stylesheets/css/consolidate.css": "./client/stylesheets/less/_consolidate.less"
				}
			}
		},
		"watch": {
			"less": {
				"options": {
					"spawn": false
				}
			}
		}
	},
	"build": {
		"dir": "./client-prod",
		"browserify": {
			"options": {},
			"files": {
				"src": "./client/app/nodemyadmin.js",
				"dest": "./client-prod/app/bundle.js"
			}
		},
		"uglify": {
			"options": {
				"mangle": false,
				"sourceMap": true,
				"sourceMapName": "./client-prod/app/sourcemap.map",
				"compress": {
					"drop_console": true
				},
				"banner": "/*! <%= product.name %> - v<%= product.version %> - */"
			},
			"files": {
				"src": "./client-prod/app/bundle.js",
				"dest": "./client-prod/app/bundle.min.js"
			}
		},
		"html": {
			"options": {
				"removeComments": true,
				"collapseWhitespace": true
			},
			"files": {
				"./client-prod/index.html": "./client/index.html",
				"./client-prod/app/signin/signin-tpl.html": "./client/app/signin/signin-tpl.html"
			}
		},
		"css": {
			"options": {
				"compress": true
			},
			"files": {
				"./client-prod/stylesheets/css/consolidate.min.css": "./client/stylesheets/less/_consolidate.less"
			}
		},
		"assets": {
			"files": {
				"src": "./client/assets/fonts/*",
				"dest": "./client-prod/assets/fonts/"
			}
		}
	},
	"tests": {
		"karma": {
			"configFile": "./configs/karma.conf.js",
			"files": "./client/test/**/*.js"
		}
	}
}