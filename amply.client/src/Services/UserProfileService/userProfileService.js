// src/services/userProfileService.js

import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Base API URL for user profiles
const API_URL = `${API_BASE_URL}/api/v1/userprofiles`;

// Get all user profiles
export const getUserProfiles = async () => {
  return await axios.get(API_URL);
};

// Get a single user profile by ID
export const getUserProfileById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

// Create a new user profile
export const createUserProfile = async (data) => {
  return await axios.post(API_URL, data);
};

// Update an existing user profile
export const updateUserProfile = async (id, data) => {
  return await axios.put(`${API_URL}/${id}`, data);
};

// Delete a user profile
export const deleteUserProfile = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

// Deactivate a user profile
export const deactivateUserProfile = async (nic) => {
  return await axios.put(`${API_URL}/${nic}/deactivate`);
};

// Request to reactivate a user profile
export const requestReactivateUserProfile = async (nic) => {
  return await axios.put(`${API_URL}/${nic}/request-reactivate`);
};

// Activate a user profile
export const activateUserProfile = async (nic) => {
  return await axios.put(`${API_URL}/${nic}/activate`);
};

//validate user information in reservation form
export const getOwnerByNIC = async (nic) => {
    return await axios.get(`${API_URL}/${nic}`);
};

// Get active EV owner profile by NIC
export const getActiveEvOwnerByNIC = async (nic) => {
    return await axios.get(`${API_URL}/active/${nic}`);
};