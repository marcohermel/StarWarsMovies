import axios from 'axios';

const baseURL = 'https://swapi.co/api';

export const getFilms = () => axios.get(`${baseURL}/films`).then((response) => response.data);

export const getFilm = (id) => axios.get(`${baseURL}/films/${id}`).then((response) => response.data);
