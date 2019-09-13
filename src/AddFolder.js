import React, { Component } from 'react';
import ApiContext from './ApiContext';
import cuid from 'cuid';


class AddFolder extends Component {
  state = {
    name: ''
  }

 
  static contextType = ApiContext;
  
 
  handleSubmit = e =>{
    e.preventDefault()
    const folderName = {
      id:cuid(),
      name: this.state.name
    };
    
    fetch(`http://localhost:9090/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(folderName),
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    })
    .then(folder => {
      this.context.addFolder(folderName)
      this.props.history.push(`/`)
    })
    .catch(error => {
      console.error({ error })
    })
   }

   validateFolderName = () => {
    let folderName = this.state.name;

    if (!folderName) {
        return 'Folder name is required'
    } else {
        return null
    }
}

  render(){
    
    return(
      <div>
        <h2>Add Folder</h2>
      <form onSubmit={e=>this.handleSubmit(e)} >
        <label htmlFor="name"> Folder Name </label>
         <input type="text" 
           name="folderName" id="folderName" required onChange={e => this.setState({name: e.target.value})}/>
        {this.validateFolderName && <p>{this.validateFolderName()}</p>}
        <button type='submit'>Add Folder</button>
      </form>
      </div>
    )
  }
}

export default AddFolder;