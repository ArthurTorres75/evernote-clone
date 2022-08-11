import React from 'react'
import { deleteNote, toggleFav } from '../../store/actions/noteAction'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import moment from 'moment';
const Note = ({ note }) => {


    const dispatch = useDispatch();
    const deleteNoteHandler = () => {
        alert('deleting')
        dispatch(deleteNote(note))
    }

    const toggleFavoriteHandler = () => {
        alert('updating')
        dispatch(toggleFav(note))
    }

    const heartMarkup = note.favorite ? 'favorite' : 'favorite_border';

    return (
        <div className="note  white ">
            <div className="right-align">
                <i className="material-icons red-text" style={{ cursor: 'pointer' }} onClick={toggleFavoriteHandler}>{heartMarkup}</i>
                <i className="material-icons" style={{ cursor: 'pointer' }} onClick={deleteNoteHandler}>delete</i>

            </div>
            <Link to={"/note/" + note.id}>
                <h5 className="black-text"> {note?.title}</h5>
            </Link>
            <p className="truncate">{note?.content}</p>
            <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
            <div className="right-align">
                <Link to={``} >
                    <i className="material-icons black-text" style={{ cursor: 'pointer' }} > edit</i>
                </Link>
            </div>
        </div>
    )
}

export default Note
