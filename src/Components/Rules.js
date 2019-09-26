import React from 'react' 
import './Rules.css'

function Rules() {
	return (
		<div style={{border: "2px solid black",
		borderRadius: "25px",}} className="rules">
			<ul>
				<li>Words with #'s or symbols wont submit</li>
				<li>Word or phrase can't exceed 18 characters</li>
				<li>Gibberish not recommended !!</li>
			</ul>
		</div>)
}

export default Rules