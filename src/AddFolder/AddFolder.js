import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import { promised } from 'q';

class AddFolder extends Component {
 
  static contextType = ApiContext;

  handleSubmit = e =>{
    e.preventDefault()
    const folderName = e.target.folderName.value;
    console.log(folderName);
    
    fetch(`http://localhost:9090/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(folderName),
    })
    .then(res => {
      if (!res.ok){
        return res.json()
      }
    Promise.reject('Something went wrong')
    })
    .then(folder => {
      this.context.addFolder(folderName)
      this.props.history.push(`/folder/${folder.id}`)
    })
    .catch(error => {
      console.error({ error })
    })
   }
  render(){
    return(
      <div>
        <h2>Add Folder</h2>
      <form className="addFolderName" onSubmit={e=>this.handleSubmit(e)} >
        <label htmlFor="name">Name </label>
         <input type="text" 
           name="name" id="folderName"/>
        <button type='submit'>Add Folder</button>
      </form>
      </div>
    )
  }
}

export default AddFolder;