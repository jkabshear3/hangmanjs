import React from 'react'


function WordInputEnd({ guessedLetters, hiddenWord }) {

function pepe() {
		const lower = hiddenWord.toLowerCase()
	const wordArray = lower.split("")
	const createWord = wordArray.map((item) => {
		if (item === " ") {
			return <h1 style={{paddingBottom: "3px",
			margin: "12px 10px",
			borderBottom: "5px solid white",
			width: "30px",
			textAlign: "center"}} id="space">{item}</h1>
		}

		else if (guessedLetters.includes(item)) {
			return <h1 style={{paddingBottom: "3px",
			margin: "12px 10px",
			borderBottom: "5px solid black",
			width: "30px",
			color: "black",
			textAlign: "center"}} id="space">{item}</h1>
		}

		else if (!guessedLetters.includes(item)){
			return <h1 className='letters'
			style={{paddingBottom: "3px",
			margin: "12px 10px",
			borderBottom: "5px solid black",
			width: "30px",
			color: "white"}} id={item}>{item}</h1>
		}
		
	}); 	
		
		return createWord;
	
}
	
	return (
		<div id='hiddenWords' style={{display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		marginTop: "35px",
		marginBottom: "35px",
		userSelect: "none",
		backgroundColor: "grey",
		borderRadius: "30px"}}>
			{pepe()}
		</div>
	)
}

export default WordInputEnd