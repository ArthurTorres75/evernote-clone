import React, { useEffect, useState } from 'react';
import Form from './Form';
// import { useSelector } from 'react-redux';
// import { useFirestoreConnect } from 'react-redux-firebase';
import { db } from '../../config/fbconfig';
import {collection, getDocs} from 'firebase/firestore/lite';
import NotesList from '../notes/NotesList';
const Home = () => {
  // useFirestoreConnect([{collection: 'notes', orderBy: ['createdAt', 'desc']}]);
  //const notes = useSelector((state) => state.firestore.ordered.notes);
  const [notesList, setNotesList] = useState([]);
  const getNotes = async () => {
    const notes = collection(db, 'notes');
    const notesSnapshot = await getDocs(notes);
    setNotesList(notesSnapshot.docs.map(doc => doc.data()));
    console.log(notesList);
  }
  useEffect(() => {
  getNotes();
  }, []);


  return (
    <div className='container'>
      <div className='row center-align'>
        <div className='col s7'><Form /></div>
        <div className='col s5'><NotesList notes={notesList}/></div>
      </div>
    </div>
  )
}

export default Home;