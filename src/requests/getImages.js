// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

function getImages(query) {
  if (!query) {
    return Promise.resolve([]);
  }
  return axios
    .get(`https://images-api.nasa.gov/search?q=${query}`)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.data.collection.items);
      const imageResults = response.data.collection.items;
      const parsedImages = imageResults.filter(
        (image) => image.data[0].media_type === "image"
      );
      const images = parsedImages.map((image) => image.link[0].href);
      return images;
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
}

export default getImages;
