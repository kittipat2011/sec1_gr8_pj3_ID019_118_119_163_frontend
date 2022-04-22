import axios from 'axios';

export const getAllArtists= () => {
    return axios.get('http://localhost:3001/artist');
}

export const getArtistById= (id) => {
    return axios.get('http://localhost:3001/artist/'+id);
}

export const getArtistByName= (name) => {
    return axios.get('http://localhost:3001/artist/'+name);
}

export const addArtist = (artist) => {
    return axios.post('http://localhost:3001/artist/add',artist);
}

export const updateArtist = (artist) => {
    return axios.put('http://localhost:3001/artist/update',artist);
}

export const deleteArtist = (id) => {
    return axios.delete('http://localhost:3001/artist/delete/'+id);
}
