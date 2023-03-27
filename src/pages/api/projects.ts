import { MongoClient, ServerApiVersion } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getProjects(req : NextApiRequest, res: NextApiResponse){
    
    if (req.method === "GET"){
        const client = new MongoClient(process.env.MONGODB_URI || "");
        await client.connect();
        const collection = client.db("CodeRecipes").collection("Projects");
        const allProjects = collection.find();
        const array = await allProjects.toArray();
    
        res.status(200).json(array);
    }
    else{
        res.status(400).json({"result" : "Invalid METHOD!"});
    }
}