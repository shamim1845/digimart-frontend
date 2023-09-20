import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ValidationError from "../validationUtils/ValidationError";

const ImageUploader = ({
  label,
  images,
  setImages,
  imagesError,
  setImagesError,
}) => {
  const [files, setFiles] = useState(null);
  const [fileBlobs, setFileBlobs] = useState(null);

  // => Effect for converting image object to Blob URL
  useEffect(() => {
    if (files) {
      setImages(files);

      // Convert image object to Blob URL
      const blobs = [];
      for (let key = 0; key < files.length; key++) {
        blobs.push(URL.createObjectURL(files[key]));
      }

      setFileBlobs(blobs);
    }
  }, [files, setImages]);

  const handleImageChange = (e) => {
    setFiles((prev) => {
      if (!prev) return e.target.files;

      // => merge previous files and new files
      const dt = new DataTransfer();
      for (let i = 0; i < prev.length; i++) {
        const file = prev[i];
        dt.items.add(file);
      }
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        dt.items.add(file);
      }

      return dt.files;
    });
  };

  const handleDelete = (index) => {
    setFiles((prev) => {
      const dt = new DataTransfer();

      for (let i = 0; i < prev.length; i++) {
        const file = prev[i];
        if (index !== i) dt.items.add(file); // here you exclude the file. thus removing it.
      }

      return dt.files;
    });
  };

  return (
    <ImageUploaderContainer>
      {label && <label>{label}</label>}

      {/* Render selected images */}
      {fileBlobs?.length > 0 && (
        <div className="image_list">
          {fileBlobs?.map((blob, i) => {
            return (
              <div key={i} className="img_box">
                <img src={blob} alt="product" />
                <svg
                  onClick={() => handleDelete(i)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
              </div>
            );
          })}
        </div>
      )}
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        onBlur={() => {
          (!images || images.length === 0) &&
            setImagesError("Product image is required.");
        }}
        accept="image/*"
      />
      {imagesError && <ValidationError message={imagesError} />}
    </ImageUploaderContainer>
  );
};

export default ImageUploader;

const ImageUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  label {
    font-size: 1.3rem;
    color: var(--text-secondary);
  }

  .image_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, auto));
    gap: 1rem;
    margin-bottom: 1rem;
    user-select: none;
    border: 1px solid #ccc;
    padding: 1rem;

    .img_box {
      width: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      svg {
        position: absolute;
        top: 3px;
        right: 3px;
        cursor: pointer;
        &:hover {
          fill: red;
        }
      }
    }
  }

  input {
    width: 100%;
    max-width: 20rem;
    margin-top: 0.5rem;
  }
`;
