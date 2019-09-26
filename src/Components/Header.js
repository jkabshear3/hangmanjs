import React from 'react' 
import './Header.css'

function Header({ two, one }) {
	return (
		<div style={{display: "flex",
 flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
  backgroundColor: "blue",
  width: "100%"
   }}>

			<div className="mainTitle" style={{display: "flex",
 flexWrap: "wrap",
  flexDirection: "row",
  alignContent: "center",
  fontFamily: "Libre Caslon Display",
  borderBottom: "solid 1px black",
  borderRight: "solid 1px black",
  paddingRight: "15px",
  marginBottom: "20px"
}}>
			<img alt="stickboy kick"src={require('./logo.gif')}/>
				<h2>Welcome to Hangman</h2>
			</div>
			<div style={{display: "flex",
flexWrap: "wrap",
flexDirection: "row",
justifyContent: "center",
alignContent: "center",
fontFamily: "Courier",
fontWeight: "bold"}}>
				<span className="span1"style={{padding: "16px"}} onClick={one}>1 Player</span>
			
				<span className="span2"style={{padding: "16px"}} onClick={two}>2 Players</span>
			</div>
		</div>
		)
}

export default Header