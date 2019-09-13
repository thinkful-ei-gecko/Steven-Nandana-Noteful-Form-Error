import React, { Component } from 'react';

class AddNote extends Component {
  render(){
    return(
      <div>
        <h2>Add Note</h2>
      <form>
        <label htmlFor="noteName">Name </label>
         <input type="text" className="noteName"
           name="name" id="name"/>
           <label htmlFor="noteContent">Content </label>
         <input type="text" className="noteContent"
           name="name" id="name"/>
           <label htmlFor="noteFolder">Folder </label>
         <input type="text" className="folderName"
           name="name" id="name"/>
        <button type='submit'>Add Note</button>
      </form>
      </div>
    )
  }
}

export default AddNote;