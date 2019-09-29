import React from 'react';
import Header from '../Components/Header'
import Arena from '../Components/Arena'
import Keyboard from '../Components/Keyboard'
import WordSpace from '../Components/WordSpace'
import WordInput from '../Components/WordInput'
import WordInputEnd from '../Components/WordInputEnd'
import LetterBox from '../Components/LetterBox'
import Rules from '../Components/Rules'
import List from '../Components/List'
import GameOver from '../Components/GameOver'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        gameStart: true,
        gameTypeTwoPlayer: false,
        gameTypeSinglePlayer: false,
        wordChosen: false,
        wordInput: '',
        wordDef: '',
        guessedLetters: '',
        phase: 0,
        list: List,
        gameEnd: false,
        isGameWon: false,
        lettersFound: document.getElementsByClassName("letters"),
        updateCondition: false
    }
  }

  onTwoPlayerClick = () => {
    this.setState({
      gameStart: false,
      gameTypeTwoPlayer: true
    })
  }

  onOnePlayerClick = () => {
    function randomNum() {
      const int = Math.random() * 100;
      const wholeInt = Math.floor(int);
      return wholeInt;
    };
    const list = this.state.list;
    const int = randomNum();
      this.setState({
        gameStart: false,
        gameTypeSinglePlayer: true,
        wordInput: list[int].word,
        wordDef: list[int].def,
        phase: 3  
      })
  }

  onWordInputChange = (event) => {
    this.setState({
      wordInput: event.target.value.toLowerCase()
    })
  }

  approvalFunction = (word) => {
if (word.includes("1") || word.includes("2") || word.includes("3") || word.includes("4") || word.includes("5") || word.includes("6") || word.includes("7") || word.includes("8") || word.includes("9") || word.includes("0") || word.includes("`") || word.includes("~") || word.includes("!") || word.includes("@") || word.includes("#") || word.includes("$") || word.includes("%") || word.includes("^") || word.includes("&") || word.includes("*") || word.includes("(") || word.includes(")") || word.includes("-") || word.includes("_") || word.includes("=") || word.includes("+") || word.includes("[") || word.includes("]") || word.includes("{") || word.includes("}") || word.includes(":") || word.includes(";") || word.includes("'") || word.includes('"') || word.includes(",") || word.includes("<") || word.includes(".") || word.includes(">") || word.includes("/") || word.includes("?") || word.includes("\\") || word.includes("|")) {
return true;}
else {
return false;}};

  onEnter = (event) => {
    if (event.key === 'Enter') {
      if (this.approvalFunction(this.state.wordInput)) {
        return null;
      }
      else {this.setState({
        wordChosen: true,
        gameTypeTwoPlayer: false,
        phase: 3
      })}
    }
     else {
      return null;
     }
    }
  

  onGuess = (event) => {
    var letters = this.state.guessedLetters+event.target.id.toLowerCase()
      if (this.state.wordInput.includes(event.target.id.toLowerCase())) {
        this.setState({
          guessedLetters: letters,
          wordChosen: true
        })
      }

      else {var brown = this.state.phase+1;
      this.setState({
        guessedLetters: letters,
        wordChosen: true,
        phase: brown
      })}  
  }

  booleanSwitch = () => {
    this.setState({
      phase: this.state.phase+1
    })
  }

  onGameEnd = () => {
    this.setState({
      gameEnd: true
    })
  }

  onRestart = () => {
    window.location.reload();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lettersFound.length) {
      return null;
    }
    else if (this.state.gameTypeTwoPlayer) {
      return null;
    }
    else if (prevState.lettersFound.length===0&&prevState.updateCondition===false) {
      this.setState({
        isGameWon: true,
        updateCondition: true
      })
    }
    else if (prevState.updateCondition===true) {
      return null;
    }
  }
  


  
  


  render() {
    return (
      this.state.isGameWon
      ?
      <div style={{background: 'grey', textAlign: 'center', borderRadius: "30px"}}>
        <GameOver playAgain={this.onRestart} word={this.state.wordInput}definition={this.state.wordDef}/> 
        <WordInputEnd guessedLetters={this.state.guessedLetters}hiddenWord={this.state.wordInput}/>
      </div>
      :
      this.state.gameEnd 
      ?
      <div style={{background: 'grey', textAlign: 'center', borderRadius: "30px"}}>
        
        <GameOver playAgain={this.onRestart}word={this.state.wordInput}definition={this.state.wordDef}/> 
        <WordInputEnd guessedLetters={this.state.guessedLetters}hiddenWord={this.state.wordInput}/>
      </div>
      :
      this.state.gameStart 
      ? 
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignContent: 'center'}}>
            <Header one={this.onOnePlayerClick} two={this.onTwoPlayerClick}/>
        </div>
      :
      this.state.gameTypeSinglePlayer
      ?
      <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignContent: 'center', backgroundColor: "slateGrey", margin: "30px", borderRadius: '30px'}}>
      <LetterBox guessedLetters={this.state.guessedLetters}/>
        <Arena endGame={this.onGameEnd}guessedLetters={this.state.guessedLetters}phase={this.state.phase}/>
        <WordInput guessedLetters={this.state.guessedLetters}hiddenWord={this.state.wordInput}/>
        <Keyboard onGuess={this.onGuess}/>
      </div>
      :
      this.state.gameTypeTwoPlayer 
      ?
      <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignContent: 'center', backgroundColor: "slateGrey", margin: "30px", borderRadius: '30px'}}>
        <Arena phase={this.state.phase}/>
        <WordSpace onEnter={this.onEnter} change={this.onWordInputChange}/>
        <Rules />
      </div>
      :
      this.state.wordChosen 
      ?
      <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignContent: 'center', backgroundColor: "slateGrey", margin: "30px", borderRadius: '30px'}}>
      <LetterBox guessedLetters={this.state.guessedLetters}/>
        <Arena endGame={this.onGameEnd}guessedLetters={this.state.guessedLetters}phase={this.state.phase}/>
        <WordInput guessedLetters={this.state.guessedLetters}hiddenWord={this.state.wordInput}/>
        <Keyboard onGuess={this.onGuess}/>
      </div>
      :
      <h1>End</h1>
    )
  }
}

export default App;

// 5. Make it so that if created word is multiple words the words will respond as a word and not just letters

// 12. Clean up folder environment