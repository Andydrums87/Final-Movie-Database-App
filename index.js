
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');




const app = express();
const port = 3000;


app.set('view engine', 'ejs');


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
  });

app.post("/", async (req, res) => {
 try {
    const movieTitle = req.body.search
    const response = await axios.get(`https://www.omdbapi.com/?t=${movieTitle}&apikey=5a86865a`);
    const result = response.data
    res.render("index.ejs", {data: result});
    console.log(result)
} catch (error) {
    
    console.log(error)
 }    
  });

  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
