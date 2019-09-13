import React, { Component } from 'react';
import ApiContext from '../ApiContext';

class AddFolder extends Component {
  handleSubmit = e =>{
    e.preventDefault()
    const folderName = e.target.addFolderName.value;
    
    fetch(`http://localhost:9090/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringyfy(folderName),
    })
    .then(res =>res.json())
    .then(resJson => )
   }
  render(){
    return(
      <div>
        <h2>Add Folder</h2>
      <form className="addFolderName" onSubmit={e=>this.handleSubmit(e)}>
        <label htmlFor="name">Name </label>
         <input type="text" className="folderName"
           name="name" id="name"/>
        <button type='submit'>Add Folder</button>
      </form>
      </div>
    )
  }
}

export default AddFolder;