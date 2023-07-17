import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

// Add album function
const AddAlbum = (props) => {

  //Function to get form data
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title)
  }

  return (
    <>
      {/* navber */}
      <Navbar path="/" page="Home" />

      <div className='mb-3 mt-3'>
        <h4 className='text-center'>Enter New Album Details</h4>
        <div className='container col-3 border border-dark' id='cont'>
          <div className="mb-3 mt-3">
            <input type="number" class="form-control border border-dark" id='aaform-userid-inp' placeholder="Enter User ID" />
          </div>
          <div className="mb-3">
            <input id='aaform-title-inp' type="text" class="form-control border border-dark" placeholder="Enter Album Title" />
          </div>
          <div className='mb-3'>
            <Link to="/"><button className='btn btn-primary' onClick={getAlbumFormData}>Add To Collection</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAlbum
