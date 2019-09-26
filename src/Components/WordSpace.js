import React from 'react'

function WordSpace({ change, onEnter }) {
	return (
		<div style={{height: "30%", textAlign: "center"}}>
		
			<input id ="wordy"
			style={{marginTop: "30px", marginBottom: "30px"}} 
			type='text' 
			placeholder="Enter word.." 
			maxLength="18"
			onChange={change} 
			onKeyPress={onEnter}/>
		
		</div>
		)
}

export default WordSpace