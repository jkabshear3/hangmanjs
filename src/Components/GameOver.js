import React from 'react'

function GameOver({ word, definition, playAgain }) {
	return (
		<div>
				<button className='grow' style={{
				outline: 'none',
				cursor: 'pointer',
				border: "4px solid white", 
				borderRadius: '35px', 
				backgroundColor: 'slateGrey', 
				fontSize: "50px", 
				fontWeight: 'bold', 
				padding: '30px 40px', 
				marginTop: '25px'}} onClick={playAgain}>Play Again</button>
				<h1 style={{fontFamily: "Times New Roman",
								fontStyle: "italic",
								fontSize: "30px"}}>{definition}</h1>
			</div>)
}

export default GameOver