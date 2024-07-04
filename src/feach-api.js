import axios from "axios";
axios.defaults.baseURL = 'https://api.unsplash.com';

export function fetchImage(topic) {
  return axios.get('/search/photos', {
    params: {
      query: topic,
      page: 1,
      per_page: 15,
      client_id: '4lPpgfIwquxrwW2Y4Z9g-Sf3OghRnBXDmckE5MFn8Ww'
    }
  }).then(response => {
      console.log(response);
      return response.data.results;
    })
}