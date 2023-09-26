import axios from "axios";

const MediaUpload = async (files, folder) => {
  // Convert files Object to Array
  const filesArr = [];
  for (let key = 0; key < files.length; key++) {
    filesArr.push(files[key]);
  }

  // Convert all files in base 64
  const reader_files = filesArr.map((file) => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (res) => {
          const public_id = file.name.split(".")[0];

          resolve({
            base64: res.target.result,
            options: {
              public_id: public_id,
              tags: [public_id],
            },
          });
        };
      } catch (error) {
        console.error(error);
        reject(error?.message);
      }
    });
  });

  const images = await Promise.all(reader_files);

  // Upload images on Cloudinary
  return new Promise((resolve, reject) => {
    axios
      .post("/api/v1/media/uploadImages", {
        images,
        folder,
      })
      .then((res) => {
        resolve(res.data.urls);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default MediaUpload;
