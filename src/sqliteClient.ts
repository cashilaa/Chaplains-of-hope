import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function connectToDatabase() {
    const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });
    return db;
}
