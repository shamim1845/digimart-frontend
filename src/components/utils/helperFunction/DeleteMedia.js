import axios from "axios";

const DeleteMedia = (public_ids) => {
  // Delete images from Cloudinary
  return new Promise((resolve, reject) => {
    axios
      .delete("/api/v1/media/deleteImages", {
        data: { public_ids },
      })
      .then((res) => {
        resolve(res.data.response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default DeleteMedia;
