import React from 'react' 

function Arena({ endGame, phase, guessedLetters }) {
  if (phase < 11) {
  	return (
		<div style={{display: "flex",
		flexWrap: "wrap",
		flexDirection: "column",
		justifyContent: "space-around",
		alignContent: "center",
		height: "300px",
		marginTop: "25px"}}>
			<div style={{height: "325px",
			width: "80%",
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "center",
			alignItems: "flex-end"}}>
		
				<img style={{height:"320px", width: '280px', border: '6px solid'}} alt="basephase"src={require(`./stickman/${phase}.png`)}/>
				
			
			</div>
		</div>)
  }
  else {
  	endGame();
  	return (<div>loading..</div>)
  }
}

export default Arena