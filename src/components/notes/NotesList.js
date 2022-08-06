import React from 'react'
import Note from './Note';
const NotesList = ({notes}) => {
  return (
    <div className='notesList'>
        {notes && notes.map((note, i) => <Note note={note} key={i} />)}
    </div>
  )
}

export default NotesList;