const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tasks = require("./app/models/tutorial.model.js").tasks;
const app = express();
const db = require("./app/models");

const { Op, BLOB } = require("sequelize");
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

app.put("/tasks/:id", (req, res) => {
  let error = '';
  let success = false;
  let payload = {};
  console.log("PUT REQUEST", req.params);
    res.send(tasks);
    res.json(tasks.id);
    res.sendStatus(200);
    res.send({
      error: error,
      success: success,
      payload: payload
    })
  try {
    
    const update = db.tasks.update({
     
      id: this.id,
      desc: req.body.desc,
      date: req.body.date,
      remarks: req.body.remarks,
      status: "Completed",
    },

      {
        where: { id: id }
      }
    );
  }
  catch (err) {
    console.log(err)
  }
});

// simple route
app.get("/tasks", (req, res) => {
  try {
    return db.tasks.findAll()
      .then(tasks => {
        res.send(tasks);
        res.json(tasks.id)
        res.sendStatus(200)
      })
  }
  catch (err) {
    console.log(err);
  }
});

app.post('/tasks', async  (req, res) => {
  let error = '';
  let success = false;
  let payload = {};
  try {
    const create = await db.tasks.create({
      id: db.tasks.id,
      desc: req.body.desc,
      date: req.body.date,
      remarks: req.body.remarks,
      status: "Completed",
    })
    const result = await create;
      if (result){
        console.log("RESULT", result);
        success = true;
        payload['task'] = result;
      } else {
        error = 'could not create task';
      }
  }
  catch (err) {
    console.log(err)
  }
  console.log({
    error: error,
    success: success,
    payload: payload
  })
  res.send({
    error: error,
    success: success,
    payload: payload
  })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});