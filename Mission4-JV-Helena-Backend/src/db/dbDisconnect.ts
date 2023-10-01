import mongoose from 'mongoose';

export const dataBaseDisconnect = () => mongoose.disconnect();
