import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://wafulasheila26:<cashi7378>@cluster0.nf0as.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

export async function connectToDatabase() {
    await client.connect();
  return client.db('your_database_name');
}
