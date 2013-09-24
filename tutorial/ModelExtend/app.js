/*
 * tipJS - OpenSource Javascript MVC Framework ver.1.21
 * 
 * Copyright 2012.07 SeungHyun PAEK
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * HomePage: http://www.tipjs.com
 * Contact: http://www.tipjs.com/contact
 */
tipJS.app({
	developmentHostList:[
		'localhost'
		,'127.0.0.1'
		,'tipjs.com'
	],
	noCache:true,
	noCacheAuto:true,
	controllers:[
		"controller1.js",
		"controller2.js"
	],
	models:[
		"modelParent.js",
		"modelChildVO.js",
		"modelChild2VO.js"
	]
});
