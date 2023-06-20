const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");
const { json } = require("body-parser");
const axios = require("axios");

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.set("view engine","ejs");
let content="general";

app.route("/")

.get((req,res)=>{
//     const userAgent = req.get('user-agent');
//     const options = {
//     host: 'newsapi.org',
//     path: '/v2/top-headlines?q=india&apiKey=7107e7558205415e96b61e9e839410d5',
//     headers: {
//       'User-Agent': userAgent
//     }
//     }

//     https.get(options,(response)=>{

//    response.on("data",(data)=>{
//         const newsdata = JSON.parse(data);
//         art=newsdata.articles;
//         console.log(art);
//     })
//     });
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=7107e7558205415e96b61e9e839410d5&category=${content}`;
   axios.get(url).then((result) => {
      const articles=  result.data.articles;
      res.render("news",{articles:articles});

    }).catch((err) => {
        console.log(err);
    });
   
})
.post((req,res)=>{
    content=req.body.query;
    console.log(req.body.query);
    res.redirect("/");
})

app.listen("3000",(req,res)=>{
    console.log("server is running on port 3000");
})


// api key: 7107e7558205415e96b61e9e839410d5