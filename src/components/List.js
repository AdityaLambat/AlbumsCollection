import React from 'react'
import { Link } from "react-router-dom";

//get album from album list
const List = (props) => {
  return (

    <div className='container-fluid p-4'>
      <div className=' d-flex flex-wrap justify-content-center justify-content-md-start'>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.album.title}</h5>
            <img src="https://cdn-icons-png.flaticon.com/128/6062/6062419.png" class="rounded mx-auto d-block" alt="..."/>
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group me-2" role="group" aria-label="First group">
                <Link to="/update-album"><button className="btn btn-primary" onClick={() => props.setUpdateAlbum(props.album)}>Update</button></Link>
              </div>
              <div className="btn-group me-2" role="group" aria-label="First group">
                <button className='btn btn-danger' onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
