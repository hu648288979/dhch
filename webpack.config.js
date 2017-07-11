module.exports={
	entry:"./main.js",
	output:{
//		path:__dirname,当前路径
		filename:"build.js",
	},
	module:{
		loaders:[
			{test:/\.vue$/,loader:'vue'},
			{test:/\.js$/,loader:"babel",exclude:/node_modules/}
		]
	},
	babel:{
		presets:["es2015"],
		plugins:["transform-runtime"]
	}
}
