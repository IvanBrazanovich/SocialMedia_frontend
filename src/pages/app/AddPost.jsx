import React from "react";
import { useState } from "react";
import styles from "../../../styles/components/addPost.module.scss";

import { useDispatch } from "react-redux";
import { addPost } from "../../features/usuarios/postSlice";

const AddPost = () => {
  // State
  const [fileInput, setFileInput] = useState("");
  const [caption, setCaption] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  // Redux
  const dispatch = useDispatch();

  //Functions
  const handleSubmit = (e) => {
    e.preventDefault();

    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      dispatch(addPost({ caption, file: reader.result }));
    };
    reader.onerror = () => {
      setErrMsg("something went wrong!");
    };
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInput(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <div>
      <form className={styles.post__form} onSubmit={handleSubmit}>
        <div>
          <label type="inputfile">
            {previewSource ? (
              <div className={styles.divWrapper__imagePreview}>
                <img src={previewSource} alt="chosen" />
              </div>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <p>Add Photo</p>
              </>
            )}

            <input
              type="file"
              value={fileInput}
              onChange={(e) => handleFileInputChange(e)}
              id="photo"
            />
          </label>
        </div>

        <div>
          <textarea
            placeholder="Write a caption..."
            name="caption"
            id="caption"
            cols="30"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows="5"
          ></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
