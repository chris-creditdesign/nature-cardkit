const twitterCard = {
	width: 1066,
	height: 600,
	marginTop: 60,
	marginSide: 30,
}

const circleLogo = {
	width: 90,
	height: 90,
}

const twitterCreditLeft = {
	card: twitterCard,
	layers: {
		headline: {
			x: 50,
			y: 80,
		},
		credit: {
			textAnchor: "start",
			x: twitterCard.marginSide,
			y: twitterCard.height - twitterCard.marginTop - 15,
		},
		circleLogo: {
			transform: `translate(${twitterCard.width -
				twitterCard.marginSide -
				circleLogo.width}, ${twitterCard.marginTop})`,
		}
	},
}

module.exports = {
	twitter: twitterCreditLeft
}
