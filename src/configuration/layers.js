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
			return this.fontSize * 1.2
		},
		textAnchor: "left",
		smartQuotes: true,
		useAsFilename: true,
		draggable: false,
		letterSpacing: "-0.01em",
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
		text: "Image credit:",
		fontSize: 24,
		fontFamily: "HardingText-Regular-Web",
		editable: {
			text: true,
			fill: true,
		},
	},
	circleLogo: {
		name: "Circle Nature Logo",
		type: "path",
		opacity: 0.5,
		d:
			"M90,45c0,24.9-20.1,45-45,45S0,69.9,0,45S20.1,0,45,0S90,20.1,90,45z M13.8,39.7c0.5,0.6,0.9,1.6,0.9,2.8v4.3 c0,1.4-0.1,2.9-0.4,4h4c-0.3-1-0.4-2.3-0.4-3.8v-5.3c0.5-0.5,1.2-0.7,2.1-0.7c1.2,0,1.6,0.5,1.6,1.6v4.4c0,1.5,0,2.8-0.4,3.8h4 c-0.4-1.1-0.4-2.6-0.4-4v-4.7c0-2.3-0.7-3.6-3.2-3.6c-1.9,0-3.2,1.2-3.7,2.6h-0.1v-2.6l0,0L13.8,39.7z M26.5,41.4 c0,0.8,0.6,1.3,1.3,1.3c0.8,0,1.2-0.4,1.5-1.6c0.2-0.8,0.5-1.1,1.3-1.1c1.3,0,1.7,0.7,1.7,2v0.2c0,1.2-0.9,1.7-2.6,2.4 c-1.8,0.7-3.5,1.5-3.5,3.4c0,1.8,1.2,3,3.2,3c1.6,0,2.6-0.7,3.1-2.2h0c0,1.1,0.8,2.2,2.3,2.2c1.3,0,1.9-0.6,2.3-1.6 c0.1-0.2,0.1-0.4,0.2-0.8c-0.1,0.1-0.5,0.2-0.6,0.2c-0.7,0-1.1-0.3-1.1-1.2v-5.3c0-2.5-1.1-3.7-4.2-3.7 C28.8,38.5,26.5,39.7,26.5,41.4z M30.8,49.2c-0.9,0-1.5-0.7-1.5-1.7c0-1.3,0.4-1.9,1.5-2.4c0.9-0.4,1.2-0.6,1.4-1v4.3 C32,48.9,31.7,49.2,30.8,49.2z M44.7,48.4c-0.4,0.2-0.8,0.3-1.7,0.3c-1.1,0-1.7-0.5-1.7-1.7v-6.5h2.7l0.3-1.7h-3V36l-0.1,0 L37,40.4v0.1h1.2v7c0,2.2,0.9,3.5,3.4,3.5c1.4,0,2.4-0.6,2.9-1.6C44.6,49.1,44.6,48.8,44.7,48.4z M45.4,39.1 c0.4,1.1,0.5,2.1,0.5,3.3v4.7c0,2.3,0.9,3.9,3.6,3.9c2.1,0,3-1.1,3.6-2.6h0v2.4h3.6c-0.3-0.9-0.5-1.7-0.5-3.6v-8.4l-3.7,0.4 c0.4,1.1,0.5,2.1,0.5,3.3V48c-0.4,0.6-1.2,0.9-2.2,0.9c-1.2,0-1.7-0.7-1.7-1.9v-8.2L45.4,39.1z M61.4,41.6v-3l0,0l-3.9,1.1 c0.5,0.6,0.9,1.6,0.9,2.8v4.3c0,1.4-0.1,2.9-0.4,4h4c-0.3-1.1-0.4-2.6-0.4-4v-3c0-1.8,0.7-2.9,1.3-2.9c0.3,0,0.4,0.3,0.7,0.5 c0.2,0.2,0.6,0.5,1.1,0.5c1,0,1.5-0.7,1.5-1.7c0-1-0.6-1.7-1.9-1.7C63,38.5,62,39.4,61.4,41.6L61.4,41.6z M76.1,47.5l-0.1-0.2 c-0.6,0.6-1.4,1.3-3.3,1.3c-2.1,0-3.6-1.2-3.6-4.1v-0.4h7c0-3.7-1.4-5.6-4.5-5.6c-3.2,0-5.6,2.6-5.6,6.6c0,3.9,2.5,5.9,5.6,5.9 C74.2,51,75.6,49.3,76.1,47.5z M71.5,40c1.3,0,1.6,1.1,1.7,3l-4,0.4C69.4,41.1,70.1,40,71.5,40z",
		editable: {
			fill: true,
		},
	},
	topLine: {
		name: "Top Line",
		type: "line",
		x1: 50,
		y1: 60,
		x2: 1016,
		y2:	60,
		stroke: "#ffffff",
		strokeWidth: "2px",
	}
}
