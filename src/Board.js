import React, { Component } from 'react'
import Note from "./Note";

class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // Array of data to list # of notes.
      notes: [
        {
          id: 1,
          note: 'Call Lauren'
        },
        {
          id: 2,
          note: 'Call Leo'
        },
        {
          id: 3,
          note: 'Learn more React!'
        }
      ]
    }
    this.eachNote = this.eachNote.bind(this)
  }
  
  eachNote(note, i) {
    return (
      <Note 
        key={i}
        index={i}>
        {note.note}
      </Note>
    )
  }

  render() {
    return (
      <div className='board'>
        {this.state.notes.map(this.eachNote)}
      </div>
    );
  }
}

export default Board;