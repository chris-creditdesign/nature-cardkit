const twitterCard = {
	width: 1066,
	height: 600,
	marginTop: 60,
	marginSide: 50,
}

const circleLogo = {
	width: 90,
	height: 90,
}

const natureLogo = {
	width: 200,
	height: 50,
}

const twitterCreditLeft = {
	card: twitterCard,
	layers: {
		headline: {
			x: twitterCard.marginSide,
			y: twitterCard.marginTop + 10,
		},
		credit: {
			x: twitterCard.marginSide,
			y: twitterCard.height - twitterCard.marginTop - 30,
		},
		circleLogo: {
			transform: `translate(${twitterCard.width -
				twitterCard.marginSide -
				circleLogo.width}, ${twitterCard.marginTop})`,
		},
		natureLogo: {
			transform: `translate(
				${twitterCard.marginSide}, 
				${twitterCard.height 
					- twitterCard.marginTop 
					- natureLogo.height}
			)`,
		},
		topLine: {
			x1: twitterCard.marginSide,
			y1: twitterCard.marginTop,
			x2: twitterCard.width - twitterCard.marginSide,
			y2:	twitterCard.marginTop,
		}
	},
}

module.exports = {
	twitter: twitterCreditLeft
}
