import React from 'react'

function LetterBox(props) {
	return (
		<div>
			<h2 style={{
			letterSpacing: "4px",
			fontFamily: "Arial Black"}}>{props.guessedLetters}</h2>
		</div>)
}

export default LetterBox