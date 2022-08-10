import React from 'react'
import { deleteNote } from '../../store/actions/noteAction'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'

const Note = ({ note }) => {


    const dispatch = useDispatch();
    const deleteNoteHandler = () => {
        alert('deleting')
        dispatch(deleteNote(note))
    }


    return (
        <div className="note  white ">
            <div className="right-align">
                <i className="material-icons red-text" style={{ cursor: 'pointer' }}>favorite</i>
                <i className="material-icons" style={{ cursor: 'pointer' }} onClick={deleteNoteHandler}>delete</i>

            </div>
            <Link to={"/note/" + note.id}>
                <h5 className="black-text"> {note?.title}</h5>
            </Link>
            <p className="truncate">{note?.content}</p>
            <p className="grey-text">2 days ago</p>
            <div className="right-align">
                <Link to={``} >
                    <i className="material-icons black-text" style={{ cursor: 'pointer' }} > edit</i>
                </Link>
            </div>
        </div>
    )
}

export default Note
