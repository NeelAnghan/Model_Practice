// console.log("Hello Prime");

// const Hello = () => {
//     setTimeout(() => {
//         console.log("Hello Prime");
//     },2000)
// }

// Hello()

const express = require("express");
const connectDB = require("./db/dbconnection");

const app = express()

app.use(express.json())

app.listen(5500, () => {
    console.log("Hello Guys Server is Online...");
})

connectDB()


app.get("/getting1", (req, res) => {
    // console.log("HELLO");
    res.status(200).json({
        success: true,
        message: "Router 1 Got Hitted "
    })
})

// app.get("/getting2",(req,res) => {
//     res.status(200).json({
//         success:true,
//         message:"Router 2 Got Hitted "
//     });
// })

// app.get("/getting3",(req,res) => {
//     res.status(200).json({
//         success:true,
//         message:"Router 3 Got Hitted "
//     });
// })

// app.get("/getting4",(req,res) => {
//     res.status(200).json({
//         success:true,
//         message:"Router 4 Got Hitted "
//     });
// })
// app.get("/getting5",(req,res) => {
//     res.status(200).json({
//         success:true,
//         message:"Router 5 Got Hitted "
//     });
// })
// app.get("/getting6", (req, res) => {
//     // console.log("HELLO");
//     res.status(200).json({
//         success: true,
//         message: "Router 6 Got Hitted "
//     })
// })
// app.get("/getting7", (req, res) => {
//     // console.log("HELLO");
//     res.status(200).json({
//         success: true,
//         message: "Router 7 Got Hitted "
//     })
// })
// app.get("/getting8", (req, res) => {
//     // console.log("HELLO");
//     res.status(200).json({
//         success: true,
//         message: "Router 8 Got Hitted "
//     })
// })
// app.get("/getting9", (req, res) => {
//     // console.log("HELLO");
//     res.status(200).json({
//         success: true,
//         message: "Router 9 Got Hitted "
//     })
// })
// app.get("/getting10", (req, res) => {
//     // console.log("HELLO");
//     res.status(200).json({
//         success: true,
//         message: "Router 10 Got Hitted "
//     })
// })


app.post("/posting1", (req, res) => {
    const reqbody = req.body
    console.log(reqbody);
    res.status(200).json({
        success: true,
        data: reqbody
    })
})

// app.post("/posting2",(req,res)=>{
//     const reqbody = req.body
//     console.log(reqbody);
//     res.status(200).json({
//         success:true,
//         data:reqbody
//     })
// })
// app.post("/posting3",(req,res)=>{
//     const reqbody = req.body
//     console.log(reqbody);
//     res.status(200).json({
//         success:true,
//         data:reqbody
//     })
// })
// app.post("/posting4",(req,res)=>{
//     const reqbody = req.body
//     console.log(reqbody);
//     res.status(200).json({
//         success:true,
//         data:reqbody
//     })
// })
// app.post("/posting5",(req,res)=>{
//     const reqbody = req.body
//     console.log(reqbody);
//     res.status(200).json({
//         success:true,
//         data:reqbody
//     })
// })
// app.post("/posting6", (req, res) => {
//     const reqbody = req.body
//     console.log(reqbody);
//     res.status(200).json({
//         success: true,
//         data: reqbody
//     })
// })
// app.post("/posting7", (req, res) => {
//     const reqbody = req.body
//     console.log(reqbody);
//     res.status(200).json({
//         success: true,
//         data: reqbody
//     })
// })
// app.post("/posting8", (req, res) => {
//     const reqbody = req.body
//     console.log(reqbody);
//     res.status(200).json({
//         success: true,
//         data: reqbody
//     })
// })
// app.post("/posting9", (req, res) => {
//     const reqbody = req.body
//     console.log(reqbody);
//     res.status(200).json({
//         success: true,
//         data: reqbody
//     })
// })
// app.post("/posting10", (req, res) => {
//     const reqbody = req.body
//     console.log(reqbody);
//     res.status(200).json({
//         success: true,
//         data: reqbody
//     })
// })

app.use((req, res, next) => {
    throw new Error("Route Not Found !!!")
})