import express from "express";

var app =express();

app.listen(8080,() => {
    console.log("Server started on port 8080");
});

app.get("/",(_req,res) => {
    res.send("Get request for /");
});

app.get("/a*c",(_req,res) => {
    res.send("hello dhanika");
});