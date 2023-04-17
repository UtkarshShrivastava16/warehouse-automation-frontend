import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import axios library for making HTTP requests

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null); // Create state variable to hold selected file

  // Function to handle file selection
const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);
}

// Function to handle file upload
const fileUploadHandler = () => {
    const formData = new FormData(); // Create new FormData object
    formData.append('image', selectedFile, selectedFile.name); // Add selected file to FormData object

    const config = { // Create config object with headers
        headers: {
            'content-type': 'multipart/form-data',
            'x-functions-key': '0GIhaxc38lI0eb0SHEFMkOwFwl4VWMJEgmvpZkmf3lMEAzFu438Nwg=='
        }
    }
    // Make POST request to API with FormData object as data and config object as headers
    axios.post('https://automation-warehouse-app.azurewebsites.net/api/addImage', formData, config) 
        .then(response => {
        console.log(response); // Log response to console
        }).catch(error => {
        console.log(error); // Log error to console
    });
}

return (
    <div>
      <input type="file" onChange={fileSelectedHandler} /> {/* Button for selecting file */}
      <button onClick={fileUploadHandler}>Upload</button> {/* Button for uploading selected file */}
    </div>
);
}

export default ImageUploader;
