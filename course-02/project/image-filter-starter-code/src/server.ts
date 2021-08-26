import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.get( "/filteredimage", async ( req, res ) => {
    let { image_url } = req.query;
    if(!image_url) { // just check if image_url exist and has value
      return res.status(404).send("You need to send a public image_url valid!");
    }
    let fileImage: string;
    try {   
      fileImage = await filterImageFromURL(image_url);
      res.sendFile(fileImage, ()=> {deleteLocalFiles([fileImage])});
    } catch (e) {
      res.status(422).send(e);
    }
  } );
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();