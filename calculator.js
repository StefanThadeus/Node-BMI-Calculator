const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
  var numberOne = Number(req.body.num1);
  var numberTwo = Number(req.body.num2);

  var result = numberOne + numberTwo;
  res.send(`The result of the calculation is: ${result}`);
});

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post('/bmicalculator', (req, res) => {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height) / 100;

  var result = weight / Math.pow(height, 2);
  res.send(`Your BMI is: ${result}`);
});

app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`);
});
