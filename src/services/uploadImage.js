const IMGBB_API_KEY = "7e57195331d9c25a86351287f665a81d"; //👈reemplazan por la suya
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error("Error al subir la imagen");
    }

    return data.data.url;    // 👈 ESTA ES LA BUENA

  } catch (error) {
    console.error("ImgBB error:", error);
    throw error;
  }
};

/* cambios sin saber porque todavia */
/* return data.data.image.url;   se le agrego image tampoco funciona */
/* return data.data.display_url; */