const express = require("express");

const app = express();

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
  },
  {
    id: 3,
    name: "John Smith",
    age: 25,
  },
];
//comments
// This route gets *ALL* the users
// app.get("/api/users", (req, res) => {
//   res.json(data);
// });

app.get("/api/users", function (req, res) {
  const user_id = req.query.id;
  const token = req.query.token;
  const geo = req.query.geo;

  res.send({
    user_id: 1,
    token: "John Doe",
    geo: 32,
  });
});

// Add a new route to get a *SINGLE* user (you can use either path param or query param)
// /api/users/1      <-- path param (req.params.id)
// /api/users?id=1   <-- query param (req.query.id) If you go with query param, just modify the existing endpoint above instead of creating a new endpoint

// BONUS QUESTION - Add routes to implement all the CRUD operations (POST, PUT, DELETE)

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
