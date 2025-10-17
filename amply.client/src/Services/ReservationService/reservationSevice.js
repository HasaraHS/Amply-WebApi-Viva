// src/services/reservationService.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Base API URL for reservations
const API_URL = `${API_BASE_URL}/api/v1/reservations`;

// Get all reservations
export const getReservations = async () => {
  return await axios.get(API_URL);
};

// Get a single reservation by ID
export const getReservationById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

// Get reservations by station ID
export const getReservationsByStationId = async (stationId) => {
  return await axios.get(`${API_URL}/station/${stationId}`);
};

// Get reservations by station name
export const getReservationsByStationName = async (stationName) => {
  return await axios.get(`${API_URL}/station-name/${encodeURIComponent(stationName)}`);
};

// Create a new reservation
export const createReservation = async (data) => {
  return await axios.post(API_URL, data);
};

// Update an existing reservation
export const updateReservation = async (id, data) => {
  return await axios.put(`${API_URL}/${id}`, data);
};

// Delete a reservation
export const deleteReservation = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

// Get reservation status & QR
export const getStatusById = async (id) => {
  return await axios.get(`${API_URL}/${id}/status`);
};

// Confirm a pending reservation (EV operator confirms)
export const confirmReservation = async (id) => {
  return await axios.patch(`${API_URL}/${id}/confirm`);
};

