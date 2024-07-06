import axios from "axios";
axios.defaults.baseURL = 'https://api.unsplash.com';

export function fetchImage(topic , currentPage) {
  return axios.get('/search/photos', {
    params: {
      query: topic,
      page: currentPage,
      per_page: 15,
      client_id: '4lPpgfIwquxrwW2Y4Z9g-Sf3OghRnBXDmckE5MFn8Ww'
    }
  }).then(response => {
      return response.data.results;
    })
}