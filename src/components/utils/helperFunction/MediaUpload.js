import axios from "axios";

const MediaUpload = async (files) => {
  // Convert files Object to Array
  const filesArr = [];
  for (let key = 0; key < files.length; key++) {
    filesArr.push(files[key]);
  }

  // Convert all files in base 64
  const reader_files = filesArr.map((file) => {
    return new Promise((resolve, reject) => {
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
    });
  });

  const images = await Promise.all(reader_files);

  // Upload image on Cloudinary
  return new Promise((resolve, reject) => {
    axios
      .post("/api/v1/media/uploadImage", {
        images,
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
