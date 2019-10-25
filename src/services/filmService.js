import api from './api';

export const getFilms = () => api.get('/films').then((response) => response.data);

export const getFilm = (id) => api.get(`/films/${id}`).then((response) => response.data);
