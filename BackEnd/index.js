import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { json } from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";


dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());


app.get("/GET", (req, res) => {
  console.log("method get");
  res.json({
    message: "this is get method ",
  });
});

// app.post("/POST", (req, res) => {
//   console.log(req.body);

//   fs.readFile("./db.json", "utf-8", (err, data) => {
//     let jsonData = [];
//     if (!err && data) {
//       try {
//         jsonData = JSON.parse(data);
//       } catch (error) {
//         console.error("erroe parsing JSON:", error);
//       }
//     }

//     const lastId = jsonData.length > 0 ? Math.max(...jsonData.map(item => item.id || 0)) : 0;
//     const newData = {
//         id: lastId + 1,
//         ...req.body
//     };

//     jsonData.push(newData);

//     fs.writeFile("./db.json", JSON.stringify(jsonData, null, 2), (err) => {
//       if (err) {
//         console.error("Error writing file:", err);
//         return res.status(500).send("Error saving data.");
//       }
//       console.log('Data saved:', newData);
//             res.send('Data received and saved.');
//     });
//   });
// });

// app.put("/PUT", (req, res) => {
//   console.log("method put");
//   res.send("this is put method");
// });

// app.delete("/DELETE", (req, res) => {
//   console.log("method delete");
//   res.send("this is delete method");
// });


  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

