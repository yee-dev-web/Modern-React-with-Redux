import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 267Ixyv8xkcpCoeJ_WhCCzuheGClFXHOyY_3ZQQZELQ ',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
