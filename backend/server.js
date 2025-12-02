const express = require('express');

 const mysql = require('mysql');
const cors = require('cors');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
   res.json("server side")
})

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prathosh',
});





// GET all users
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, data) => {
    if (err)  return res.json("error")
  res.json(data);
  });
});

// POST create user
app.post('/create', (req, res) => {
  const { id, name, email, age } = req.body;
  const sql = 'INSERT INTO users (id, name, email, age) VALUES (?, ?, ?, ?)';
  db.query(sql, [id, name, email, age], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).json({ error: 'Insert failed' });
    }
    res.json({ message: 'User added', result });
  });
});



// Server listening
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// const app = express();
// const PORT = 3000;  


// // MongoDB Connection
// mongoose.connect("mongodb://localhost:27017/crud_db", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected"))
// .catch((err) => console.log("DB connection error:", err));

// // Mongoose Schema
// const ItemSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   salary: Number
// });

// const Item = mongoose.model("Item", ItemSchema);

