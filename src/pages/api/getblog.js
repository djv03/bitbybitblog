//this file has functionality of perform query on the api route /api/blogpost?slug=[blogname]


import * as fs from 'fs';


export default function handler(req, res) {
  
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8', (err, data)=>{

    //enable this to deep dive into the req and res object(but see in the console not in the browser)
    // console.log(req);
    // console.log("this is breaak");
    // console.log(res);
    if (err){
    res.status(500).json({error: "No such blog found"})
    // console.log(req.query.slug)

    }
    res.status(200).json( JSON.parse(data) )
  })
}