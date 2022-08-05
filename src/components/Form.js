import React, { useState } from "react";
import useInput from "../customhook/useInput";
const Form = () => {
    const [title, bindTitle, resetTitle] = useState();
    const [content, bindContent, resetContent] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, content});
        resetContent();
        resetTitle();
    };
  return (
    <div className="section">
      <form action="">
        <h5 className="grey-text">New Note</h5>

        <div className="input-field">
          <input id="note_title" type="text" className="validate" {...bindTitle}/>
          <label className="active" for="note_title">
            Note Title
          </label>
        </div>
        <div className="input-field">
          <textarea id="note_content" className="materialize-textarea" {...bindContent}></textarea>
          <label for="note_content">Note Content</label>
        </div>
        <button className="btn green">Add</button>
      </form>
    </div>
  );
};

export default Form;
