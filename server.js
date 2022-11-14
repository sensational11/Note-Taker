//Required Dependencies
const express = require("express");
//Native Node package that comes with express that acts like fs
const path = require("path");




//this is calling express
const app = express();
const apiRoutes = require("./apiroute/myApiRoute");
const htmlRoutes = require("./apiroute/myRoutehtml");

//this is setting the port for the server to use.
const PORT = process.env.PORT || 3302;

//The app.use() method notifies the express library that our front end code is houses in the Public Folder. It's going to the entry point the index file. 
app.use(express.static("public"));

app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

// app.get("/", (req, res) => res.send("this is the routes"));
//This is sending the server information to the client. The first paramater we pass in is the url then the message we want to display. Req is requirement and res is the response. Sending the file informtion to the client. The path.join is allow us to use the express path comonenet and the __dirname is how it recognizes the parent folder we're calling from. Then we set our path. 
// app.get("/public", (req, res) => {
//   res.sendFile(path.join(__dirname, "/index.html"))
// });



//method that creates your server and console log that returns that your server has been created 
app.listen(PORT, () => {
  console.log(`server has been successfully created at localhost:${PORT}`);
});
