import axios from 'axios';

axios.defaults.baseURL = "https://api.unsplash.com/";

interface FetchPhotos{
    query: string;
    page: number;
}

export interface Photo{
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
    likes: number;
}


export const fetchPhotos = async ({query, page}: FetchPhotos): Promise<Photo[]> => {

    const response = await axios.get("/search/photos/", {
        params: {
            client_id: "2XBzr96cBxi5tZEO40X9Xsl2i-Ygx8dH5qGcPRjno0s",
            query,
            per_page: 15,
            page,
    }});
    return response.data.results;
}