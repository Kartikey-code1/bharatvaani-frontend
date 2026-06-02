import axios from 'axios';

// Yahan humne default mein tumhara Render URL set kar diya hai.
// Jab Vercel mein VITE_API_URL set karoge, toh wo usse override kar dega.
export const api = axios.create({ 
  baseURL: import.meta.env.VITE_API_URL || 'https://bharatvaani-backend.onrender.com/api' 
});