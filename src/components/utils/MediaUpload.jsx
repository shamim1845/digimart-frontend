import axios from "axios";

const MediaUpload = (file) => {
  // Upload image on Cloudinary
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (res) => {
      const public_id = file.name.split(".")[0];

      axios
        .post("/api/v1/media/uploadImage", {
          images: [
            {
              base64: res.target.result,
              options: {
                public_id: public_id,
                tags: [public_id],
              },
            },
          ],
        })
        .then((res) => {
          resolve(res.data.urls);
        })
        .catch((err) => {
          reject(err.message);
        });
    };
  });
};

export default MediaUpload;
