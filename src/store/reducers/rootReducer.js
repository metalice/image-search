const init = {
  images: {},
  imagesReady: false,
  searchTerm: ""
};

export default (state = init, action) => {
  switch (action.type) {
    case "GET_IMAGES": {
      if (action.payload.length > 0) {
        return {
          ...state,
          images: [
            action.payload.slice(0, 30),
            action.payload.slice(30, 60),
            action.payload.slice(60)
          ],
          imagesReady: true
        };
      } else {
        console.log(state.searchTerm);

        return { ...state, images: [], imagesReady: false };
      }
    }
    case "CHANGE_IMAGE_READY": {
      return { ...state, imagesReady: false };
    }
    case "CHANGE_SEARCH_TERM": {
      return { ...state, searchTerm: action.payload };
    }
    default:
      return state;
  }
};
