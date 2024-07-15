// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname =dirname(fileURLToPath(import.meta.url));


// const app = express();
// const port = 3000;

// app.use(express.static("Public"));
// app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", (req, res)=>{
//     res.render(__dirname + "/View/index.ejs"
        
//     ); 
// })

// app.post("/home", (req, res)=> {
//     const {username, password, email} = req.body
//     try{
//         if(!username || !password || !email ){
//             throw new Error("Fill all requirement");
//         }
//     }
//     catch(error){
//         res.render(
//             "home", {error: error.message}
//         )
//     }

// })
// // app.get("/:universalURL", (req, res) => {
// //     res.render("404 URL NOT FOUND");
// // });
// app.listen(port, ()=>{
//     console.log(`Server is runing on ${port}`);
// })










import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render(__dirname + "/View/index.ejs");
});

app.post("/home", (req, res) => {
    const { username, password, email } = req.body;
    try {
        if (!username || !password || !email) {
            throw new Error("Fill all requirement");
        }
        res.send("Registration successful"); // Redirect or render a success page
    } catch (error) {
        res.render(__dirname + "/View/index.ejs", { error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
