const fillColours = [
	{ name: "Black", hex: "#000000", dark: true },
	{ name: "White", hex: "#ffffff", dark: false },
	{ name: "Orange #2", hex: "#eb5b25", dark: true },
	{ name: "Yellow #3", hex: "#fbba00", dark: false },
	{ name: "Turquoise #1", hex: "#0095bb", dark: true },
	{ name: "Turquoise #3", hex: "#00928c", dark: true },
]

const black = "#000000"
const white = "#ffffff"

const themes = {}

fillColours.forEach((object, index, array) => {
	themes[object.name] = {}

	themes[object.name].card = {}
	themes[object.name].card.fill = object.hex

	themes[object.name].layers = {}

	themes[object.name].layers.headline = {}
	themes[object.name].layers.headline.fill = object.dark
		? white
		: black

	themes[object.name].layers.circleLogo = {}
	themes[object.name].layers.circleLogo.fill = object.dark
		? white
		: black

	themes[object.name].layers.natureLogo = {}
	themes[object.name].layers.natureLogo.fill = object.dark
		? white
		: black

	themes[object.name].layers.credit = {}
	themes[object.name].layers.credit.fill = object.dark
		? white
		: black

	themes[object.name].layers.topLine = {}
	themes[object.name].layers.topLine.stroke = object.dark
		? white
		: black

	themes[object.name].layers.nobelHeadline = {}
	themes[object.name].layers.nobelHeadline.fill = object.dark
		? white
		: black

	themes[object.name].layers.nobelWinners = {}
	themes[object.name].layers.nobelWinners.fill = object.dark
		? white
		: black

	themes[object.name].layers.nobelQuote = {}
	themes[object.name].layers.nobelQuote.fill = object.dark
		? white
		: black
})

module.exports = themes
