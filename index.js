import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './connectDB.js';
import {inserInfo, Model} from './modelSchema.js';
const app = express();
const port = 7000;

connectDB();

app.use(bodyParser.json());

app.get('/insert', async (req, res) => {
    let result = await insertData();
    res.json({result});
});

app.get('/see-data', async(req,res) => {
  const data = await Model.find();
  if(!data){
    res.json({message: "No data found"});
  }else{
    res.json(data);
  }
})

app.get('/', async (req, res) => {
    res.send("Service is running. Hit /insert to insert the data into the db OR Hit /see-data to see the data in the db");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

function insertData() {
  console.log("Inserting Data");
  return new Promise((resolve, reject) => {
    const name = "Saksham Vasudev";
    const sid = "300357973";
    inserInfo(name, sid)
      .then((result) => {
        console.log("Document inserted successfully:", result);
        resolve(result);
      })
      .catch((err) => {
        console.error("Error during inserting data:", err);
        reject(err);
      });
  });
}