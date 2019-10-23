import api from './api';

const baseURL = 'https://swapi.co/api';

export const getFilms = () => api.get(`${baseURL}/films`).then((response) => response.data);

export const getFilm = (id) => api.get(`${baseURL}/films/${id}`).then((response) => response.data);

export const getCharacter = (id) => api.get(`/peoples/${id}`).then((response) => response.data);

export const getPlanet = (id) => api.get(`/planets/${id}`).then((response) => response.data);

export const getStarShip = (id) => api.get(`/starships/${id}`).then((response) => response.data);

export const getVehicle = (id) => api.get(`/vehicles/${id}`).then((response) => response.data);

export const getSpecie = (id) => api.get(`/species/${id}`).then((response) => response.data);
