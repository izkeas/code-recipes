import { MongoClient, ServerApiVersion } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getProjects(req : NextApiRequest, res: NextApiResponse){
    
    if (req.method === "GET" || req.method === "POST"){

        const queryText = req.body.query || "";
        const tags = req.body.tags || [];
        const client = new MongoClient(process.env.MONGODB_URI || "");

        await client.connect();

        const collection = client.db("CodeRecipes").collection("Projects");

        // Query search
        let allProjects = collection.find( 
            queryText ? {
                $text : {
                    $search : queryText
                }
            } : 
            {}
        )

        // Filter tags
        if (Array.isArray(req.body.tags) && req.body.tags.length > 0){
            allProjects = allProjects.filter({
                tags : { $all : tags}
            })
        }


        const array = await allProjects.toArray();    
        res.status(200).json(array);
        await client.close();
    }
    else{
        res.status(400).json({"result" : "Invalid METHOD!"});
    }
}