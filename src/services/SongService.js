import axios from 'axios';

export const getAllSongs = () => {
    return axios.get('http://localhost:3001/song');
}

export const getSongById = (id) => {
    return axios.get('http://localhost:3001/song/'+id);
}

export const getSongByName = (name) => {
    return axios.get('http://localhost:3001/song/'+name);
}

export const addSong = (song) => {
    return axios.post('http://localhost:3001/song/add',song);
}

export const updateSong = (song) => {
    return axios.put('http://localhost:3001/song/update',song);
}

export const deleteSong = (id) => {
    return axios.delete('http://localhost:3001/song/delete/'+id);
}