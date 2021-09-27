const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tasks = require("./app/models/tutorial.model.js").tasks;
const id = require("./app/models/tutorial.model.js");

const app = express();
// app.use(...);
const db = require("./app/models");

const { Op } = require("sequelize");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/tasks", (req, res) => {
  // res.json({ message: "Welcome to bezkoder application." });
  try {
return db.tasks.findAll() 
.then(tasks => {
  res.send(tasks);
})
}
  catch(err){
    console.log(err);
  }
});

app.post('/tasks', (req, res) => {
  console.log("HEREEEEE", req);
   try {
  const create = db.tasks.create({
    // id: req.body.id,
    id: this.id,
    description: req.body.desc,
    date: req.body.date,
    remarks: req.body.remarks,
    status: "Completed",
  })
  console.log(create);
//   .then(tasks => {
//           res.send(tasks);
//           console.log('HERE', tasks);
// //      } else {
// //          res.status(400).send('Error in insert new record');
// //      }
//  });
   }
catch(err) {
  console.log(err)
}

  // const { Tasks } = require("sequelize");
  // db.sequelize.create({ description: req.body.description, date: req.body.date, remarks: req.body.remarks});
  
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});