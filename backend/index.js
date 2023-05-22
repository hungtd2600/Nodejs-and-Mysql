import express from "express";
import mysql from "mysql";

const db = mysql.createConnection({
  user: "admin",
  password: "password",
  database: "DB",
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("this is backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM DB.books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`description`,`cover`) VALUES (?)";
  const values = [req.body.title, req.body.description, req.body.cover];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("done");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
