import axios from "axios";

const leftSideUrl =
  "https://pixabay.com/api/?key=11037114-c5e59185895bd285dee5a9e7f&q=";
const rightSideUrl = "&image_type=photo&pretty=true&per_page=90";

export const getImages = data => dispatch => {
  axios
    .get(`${leftSideUrl}${data}${rightSideUrl}`)
    .then(result => {
      dispatch({ type: "GET_IMAGES", payload: result.data.hits });
    })
    .catch(err => console.log(err));
};
export const changeImageReady = () => ({
  type: "CHANGE_IMAGE_READY"
});

export const changeSearchTerm = data => ({
  type: "CHANGE_SEARCH_TERM",
  payload: data
});
