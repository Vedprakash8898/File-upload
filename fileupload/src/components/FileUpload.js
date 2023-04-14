// import './App.css';
import React, { useState, useRef } from "react";
import axios from "axios";
import "../App.css";
import { MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons";

function FileUpload() {
  const [file, setFile] = useState();
  const [fileError, setFileError] = React.useState();
  const filePicekerRef = useRef(null);

  let formData = new FormData();

  function handleChange(event) {
    console.log(event.target.files[0]);
    if (event.target && event.target.files[0]) {
      formData.append("file", event.target.files[0]);
    }
    setFile(event.target.files[0]);
    setFileError("");
  }

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const url = 'http://localhost:3001/data';
  //   const formData = new FormData();
  //   formData.append(file, "file");
  //   console.log(formData);
  //   const config = {
  //     headers: {
  //       method: "post",
  //       body: formData,
  //       "content-type": 'multipart/form-data',
  //     },
  //   };
  //   axios.post(url,file , formData, config.name).then((response) => {
  //     // console.log(response.data);
  //     console.log(formData);
  //     console.log(url);

  //   });

  // }

  const buttonhandle = () => {
    axios({
      method: "post",
      url: "http://localhost:3001/data",
      data: { formData },
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });






      

























    !file && setFileError("please select the file to upload");
  };

  // const SubmitFileData = () > =(
  //   Axios.post
  //   'https://v2.convertapi.com/upload",
  //   formData
  //   .then res =>
  //   console.log(res);
  //   }}
  //   .catch(error > =
  //   console.log(error); You, seconds ago Uncommitted changes
  //   I

  // console.log("check file", file);
  const deleteFile = () => {
    console.log("first");
    setFile("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>React File Upload</h1>

        <br />

        <div className="parentchild">
          <h2>Upload Files</h2>

          <div>
            {" "}
            <i class="fa-solid fa-file size: 70"></i>
          </div>
          <br />
          <br />
          <input
            type="file"
            accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
            style={{ border: "1px solid red", width: "80%", fontSize: "22px" }}
            onChange={(e) => setFile(e.target.value)}
            value={file}
          />
          {/* <span><i class="fa-solid fa-x"></i></span> */}
          <MdDelete size={26} onClick={deleteFile} />

          <br></br>
          <br></br>
          <h4>OR Drop the Files Here</h4>

          <br />
        </div>

        <div className="bttton">
          <button className="btn"  type="submit" onClick={buttonhandle}>
            Upload files Here
          </button>
          <div>{fileError && <div className="error"> {fileError} </div>}</div>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
