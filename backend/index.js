const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Person = require('./models/Person');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.get('/person', async (req, res) => {
  const people = await Person.find();
  res.json(people);
});
app.post('/person', async (req, res) => {
  const person = new Person(req.body);
  await person.save();
  res.json(person);
});
app.put('/person/:id', async (req, res) => {
  const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(person);
});
app.delete('/person/:id', async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.json({ message: 'Person deleted' });
});
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
