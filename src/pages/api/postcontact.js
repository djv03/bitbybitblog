//this is our first time to make a post request which helps us getting data from the contact page

import * as  fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    console.log(req.body);

    let data = await fs.promises.readdir('contactdata', (err, files) => {

    } );

    fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body),()=>{
        console.log("file saved");
    });
    res.status(200).json(res);
  } else {
    // Handle any other HTTP method
    res.status(200).json([ ]);
  }
}