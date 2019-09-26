import React from 'react'
import './Keyboard.css'
import tachyons from 'tachyons'

function Keyboard({ onGuess }) {
	const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
	const letterArray = alphabet.map((item) => {
		return <div style={{display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "space-around",
		border: "1px solid black",
		borderRadius: "20px",
		padding: "8px",
		margin: "1px",
		textAlign: "center",
		fontFamily: "Courier",
		fontSize: "25px",
		fontWeight: "bold",
		height: "6.7%",
		width: "8.8%",
		backgroundColor: 'lightgrey'}}onClick={onGuess}className='letterBox grow' id={item}>{item}</div>
	})
	return (
		<div style={{display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignSelf: "center",
		height: "37.5%",
		width: "80.5%"}}>
			{letterArray}
		</div>
	)
}

export default Keyboard