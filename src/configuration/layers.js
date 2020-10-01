const layouts = require("./layouts/main")

module.exports = {
	image: {
		name: "Image",
		type: "image",
		x: 0,
		y: 0,
		width: 1080,
		get height() {
			return this.width
		},
		src: "",
		preserveAspectRatio: "xMinYMin",
		draggable: true,
		opacity: 1,
		editable: {
			src: true,
			width: {
				min: 50,
				max: 2000,
				step: 10,
			},
			opacity: {
				min: 0,
				max: 1,
				step: 0.1,
			},
		},
	},
	mask: {
		name: "Image mask",
		type: "rectangle",
		x: 0,
		y: 0,
		width: 0,
		height: 1080,
		fill: "#000000",
		opacity: 1,
		editable: {
			x: {
				min: 0,
				max: 1080,
				step: 10,
			},
			y: {
				min: 0,
				max: 1080,
				step: 10,
			},
			width: {
				min: 0,
				max: 1080,
				step: 10,
			},
			height: {
				min: 0,
				max: 1080,
				step: 10,
			},
			opacity: {
				min: 0,
				max: 1,
				step: 0.1,
			},
			fill: true,
		},
	},
	headline: {
		name: "Main text",
		type: "text",
		text:
			'"Welcome to the Nature\nsocial media image tool"',
		fontSize: 72,
		fontFamily:
			"HardingText-Regular-Web",
		get lineHeight() {
			return this.fontSize * 1.1
		},
		textAnchor: "left",
		smartQuotes: true,
		useAsFilename: true,
		draggable: false,
		letterSpacing: "-0.02em",
		editable: {
			text: true,
			fontSize: {
				min: 50,
				max: 90,
				step: 1,
			},
		},
	},
	credit: {
		name: "credit on bottom",
		type: "text",
		text: "Lorem Ipsum",
		fontSize: 24,
		fontFamily: "HardingText-Regular-Web",
		textAnchor: "start",
		editable: {
			text: true,
			fill: true,
		},
	},
	circleLogo: {
		name: "Circle Nature Logo",
		type: "path",
		opacity: 0.4,
		d:
			"M90,45c0,24.9-20.1,45-45,45S0,69.9,0,45S20.1,0,45,0S90,20.1,90,45z M13.8,39.7c0.5,0.6,0.9,1.6,0.9,2.8v4.3 c0,1.4-0.1,2.9-0.4,4h4c-0.3-1-0.4-2.3-0.4-3.8v-5.3c0.5-0.5,1.2-0.7,2.1-0.7c1.2,0,1.6,0.5,1.6,1.6v4.4c0,1.5,0,2.8-0.4,3.8h4 c-0.4-1.1-0.4-2.6-0.4-4v-4.7c0-2.3-0.7-3.6-3.2-3.6c-1.9,0-3.2,1.2-3.7,2.6h-0.1v-2.6l0,0L13.8,39.7z M26.5,41.4 c0,0.8,0.6,1.3,1.3,1.3c0.8,0,1.2-0.4,1.5-1.6c0.2-0.8,0.5-1.1,1.3-1.1c1.3,0,1.7,0.7,1.7,2v0.2c0,1.2-0.9,1.7-2.6,2.4 c-1.8,0.7-3.5,1.5-3.5,3.4c0,1.8,1.2,3,3.2,3c1.6,0,2.6-0.7,3.1-2.2h0c0,1.1,0.8,2.2,2.3,2.2c1.3,0,1.9-0.6,2.3-1.6 c0.1-0.2,0.1-0.4,0.2-0.8c-0.1,0.1-0.5,0.2-0.6,0.2c-0.7,0-1.1-0.3-1.1-1.2v-5.3c0-2.5-1.1-3.7-4.2-3.7 C28.8,38.5,26.5,39.7,26.5,41.4z M30.8,49.2c-0.9,0-1.5-0.7-1.5-1.7c0-1.3,0.4-1.9,1.5-2.4c0.9-0.4,1.2-0.6,1.4-1v4.3 C32,48.9,31.7,49.2,30.8,49.2z M44.7,48.4c-0.4,0.2-0.8,0.3-1.7,0.3c-1.1,0-1.7-0.5-1.7-1.7v-6.5h2.7l0.3-1.7h-3V36l-0.1,0 L37,40.4v0.1h1.2v7c0,2.2,0.9,3.5,3.4,3.5c1.4,0,2.4-0.6,2.9-1.6C44.6,49.1,44.6,48.8,44.7,48.4z M45.4,39.1 c0.4,1.1,0.5,2.1,0.5,3.3v4.7c0,2.3,0.9,3.9,3.6,3.9c2.1,0,3-1.1,3.6-2.6h0v2.4h3.6c-0.3-0.9-0.5-1.7-0.5-3.6v-8.4l-3.7,0.4 c0.4,1.1,0.5,2.1,0.5,3.3V48c-0.4,0.6-1.2,0.9-2.2,0.9c-1.2,0-1.7-0.7-1.7-1.9v-8.2L45.4,39.1z M61.4,41.6v-3l0,0l-3.9,1.1 c0.5,0.6,0.9,1.6,0.9,2.8v4.3c0,1.4-0.1,2.9-0.4,4h4c-0.3-1.1-0.4-2.6-0.4-4v-3c0-1.8,0.7-2.9,1.3-2.9c0.3,0,0.4,0.3,0.7,0.5 c0.2,0.2,0.6,0.5,1.1,0.5c1,0,1.5-0.7,1.5-1.7c0-1-0.6-1.7-1.9-1.7C63,38.5,62,39.4,61.4,41.6L61.4,41.6z M76.1,47.5l-0.1-0.2 c-0.6,0.6-1.4,1.3-3.3,1.3c-2.1,0-3.6-1.2-3.6-4.1v-0.4h7c0-3.7-1.4-5.6-4.5-5.6c-3.2,0-5.6,2.6-5.6,6.6c0,3.9,2.5,5.9,5.6,5.9 C74.2,51,75.6,49.3,76.1,47.5z M71.5,40c1.3,0,1.6,1.1,1.7,3l-4,0.4C69.4,41.1,70.1,40,71.5,40z",
		editable: {
			fill: true,
		},
	},
	natureLogo: {
		name: "Nature Logo",
		type: "path",
		d:
			"M12.5,9.2l0.1,0.1v8.3h0.2c1.7-4.7,5.9-8.5,12-8.5c7.9,0,10.3,4,10.3,11.5v14.9c0,4.5,0.3,9.2,1.4,12.7H23.8 c1.1-3.3,1.2-7.4,1.2-12.3V21.7c0-3.5-1.4-5.1-5.2-5.1c-2.9,0-5.1,0.8-6.7,2.3v17.1c0,4.9,0.1,9,1.2,12.3H1.5 c1.1-3.5,1.4-8.2,1.4-12.7V21.7c0-3.7-1.3-7.1-2.9-8.8L12.5,9.2z M56,9.1c9.9,0,13.6,3.9,13.6,12v16.9c0,3,1.2,4,3.6,4 c0.4,0,1.6-0.2,2.1-0.6c-0.2,1.1-0.4,1.8-0.6,2.5c-1.1,3.2-3.2,5.2-7.4,5.2c-4.9,0-7.4-3.4-7.5-7h-0.1c-1.6,4.9-4.8,7-9.8,7 c-6.2,0-10.1-3.7-10.1-9.5c0-6.1,5.5-8.7,11.2-11c5.4-2.2,8.4-3.7,8.4-7.6v-0.8c0-4.3-1.3-6.5-5.4-6.5c-2.5,0-3.5,1.1-4,3.6 c-0.8,3.7-2.3,5-4.7,5c-2.2,0-4.2-1.5-4.2-4.2C41,12.8,48.3,9.1,56,9.1z M59.3,40.8V27c-0.8,1.1-1.8,1.8-4.6,3.2 c-3.6,1.8-4.9,3.7-4.9,7.8c0,3.3,1.8,5.4,4.8,5.4C57.5,43.4,58.5,42.3,59.3,40.8z M98.3,44c-1.3,3-4.6,5-9.2,5 c-7.9,0-10.9-4-10.9-11.2V15.3h-3.7V15L88.2,0.9L88.4,1v8.9h9.8l-1,5.4h-8.8v20.9c0,4,1.7,5.6,5.3,5.6c2.8,0,4.2-0.4,5.4-1.1 C99,42.1,98.8,42.9,98.3,44z M113.3,9.6v26.5c0,4,1.6,6.2,5.4,6.2c3.3,0,5.7-1.1,7.1-2.9V21.5c0-3.9-0.4-7.2-1.6-10.6l11.8-1.2v27.1 c0,5.9,0.6,8.6,1.6,11.5H126v-7.6h-0.1c-1.6,4.9-4.8,8.4-11.4,8.4c-8.3,0-11.4-5-11.4-12.5v-15c0-3.9-0.4-7.2-1.6-10.6L113.3,9.6z  M153,18.9c1.7-7.1,5-9.8,9.3-9.8c4,0,5.9,2.1,5.9,5.3c0,3-1.6,5.3-4.7,5.3c-1.8,0-2.8-0.8-3.6-1.6c-0.9-0.8-1.5-1.6-2.3-1.6 c-2.1,0-4.3,3.4-4.3,9.3v9.5c0,4.7,0.4,9.4,1.3,12.9h-12.8c1.1-3.5,1.4-8.2,1.4-12.7V21.7c0-3.7-1.3-7.1-2.9-8.8l12.5-3.6l0.1,0.1 v9.6H153z M185.3,49.1c-9.8,0-17.9-6.5-17.9-19c0-12.7,7.7-21.1,18.1-21.1c9.9,0,14.5,6.3,14.5,18.1h-22.5v1.1 c0,9.6,5,13.3,11.7,13.3c6.1,0,8.8-2.5,10.6-4.2l0.2,0.6C198.4,43.7,193.8,49.1,185.3,49.1z M177.6,24.5l12.8-1.1 c-0.1-6.1-1.1-9.7-5.3-9.7C180.8,13.7,178.3,17.1,177.6,24.5z",
	},
	topLine: {
		name: "Top Line",
		type: "line",
		stroke: "#ffffff",
		strokeWidth: "2px",
	},
	nobelHeadline: {
		name: "Nobel headline",
		type: "text",
		text:
			'2020 Nobel Prize in XXXXX',
		fontSize: 72,
		fontFamily:
			"HardingText-Regular-Web",
		get lineHeight() {
			return this.fontSize * 1.1
		},
		textAnchor: "left",
		smartQuotes: true,
		useAsFilename: true,
		draggable: false,
		letterSpacing: "-0.02em",
		editable: {
			text: true,
			fontSize: {
				min: 50,
				max: 90,
				step: 1,
			},
		},
	},
	nobelWinners: {
		name: "Nobel winners",
		type: "text",
		text:
			'Winner Name & Winner Name &\nWinner Name & Winner Name',
		fontSize: 44,
		fontFamily:
			"HardingText-Regular-Web",
		get lineHeight() {
			return this.fontSize * 1.1
		},
		textAnchor: "left",
		smartQuotes: true,
		useAsFilename: true,
		draggable: false,
		letterSpacing: "-0.02em",
		editable: {
			text: true,
			fontSize: {
				min: 30,
				max: 60,
				step: 1,
			},
		},
	},
	nobelQuote: {
		name: "Nobel quote",
		type: "text",
		text:
			'"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"',
		fontSize: 24,
		fontFamily:
			"GraphikNature-Regular-Web",
		get lineHeight() {
			return this.fontSize * 1.1
		},
		textAnchor: "left",
		smartQuotes: true,
		useAsFilename: true,
		draggable: false,
		// letterSpacing: "-0.02em",
		editable: {
			text: true,
			fontSize: {
				min: 18,
				max: 36,
				step: 1,
			},
		},
	},
}
