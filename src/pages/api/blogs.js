//---------->this file has function to read all the blogs from blogdata "directory" and render it on /api/blogs endpoint


import * as fs from 'fs';


console.log("form blogs.js");

export default async function handler(req, res) {

    let data = await fs.promises.readdir('blogdata');
    let filecontent;
    let allblogs = [];

    for (let index = 0; index < data.length; index++) {

        const item = data[index];
        // console.log(item);

        filecontent = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
        //this will read the each file of data variable and store it in the filecontent variable
        //the reason for using await is that we need readfile to complete and then we can move to the next line

        // console.log(filecontent);
        //we can see now content of each file by this line

        // allblogs.push(filecontent);//now this wont work, coz filecontent is string but we need object 

        //so we do following
        allblogs.push(JSON.parse(filecontent))

        //here allblogs is an array of object of blogd which has been read by line 20 and we are pushing in it

        //now this allblogs will be fetched to the client/hamara computer on /blog endpoint

    }
    res.status(200).json(allblogs);

}


//these are the some of the most important learnings of the javascript

//this api route /api/getblog is used to get the blog data from the blogdata folder
//and api route /api/blogs is used to get the list of blogs from the blogdata folder

// here handeler is the function which is used to handle the request and response
// the reason for using async await is that:
//  fs.promises.readdir() which is reading data and storing it in data variable,
// doing this is a asynchronous task and we need to wait for it to complete and then we can send the response to the client[hamara computer]