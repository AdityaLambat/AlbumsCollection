import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const UpdateAlbum = (props) => {

  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById('title-inp').value;
    let updateUserid = document.getElementById('userid-inp').value;

    if (updateTitle === '') {
      updateTitle = props.album.title;
    }
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  }

  return (
    <>
      <Navbar path="/" page="Home" />
      <div className='container border border-dark' id='cont'>
        <div className="mb-3 mt-3">
          <h4 className='text-left'>Title : {props.album.title}</h4>
          <h4 className='text-left'>User Id : {props.album.userId}</h4>
          <input type="text" class="form-control border border-dark" id='title-inp' placeholder="Enter New Title" />
        </div>
        <div className="mb-3">
          <input id='userid-inp' type="number" class="form-control border border-dark" placeholder="Enter New User ID" />
        </div>
        <div className='mb-3'>
          <Link to='/'><button className='btn btn-primary' type='submit' onClick={getUpdateData}>Save</button></Link>
        </div>
      </div>
    </>
  )
}

export default UpdateAlbum;
