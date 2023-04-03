import { MongoClient, ServerApiVersion } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getProject(req : NextApiRequest, res: NextApiResponse){
    
    if (req.method === "POST"){


        const client = new MongoClient(process.env.MONGODB_URI || "");
        await client.connect();
        const collection = client.db("CodeRecipes").collection("Projects");
        const project = await collection.findOne(req.body);

    
        res.status(200).json( project);
    }
    else{
        res.status(400).json({"result" : "Invalid METHOD!"});
    }
}