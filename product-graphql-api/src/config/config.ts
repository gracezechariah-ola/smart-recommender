import dotenv from 'dotenv';
import { hostname } from 'os';
dotenv.config();

const SERVER_HOST = process.env.SERVER_HOST || '127.0.0.1';
const SERVER_PORT = process.env.SERVER_PORT || 4490;

export const config = {
    server : {hostname: SERVER_HOST, port: SERVER_PORT }
};