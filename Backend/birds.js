// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();
// const port = 8001;
// const cloudinary = require('cloudinary').v2;
// app.use(cors());
// app.use(express.json());

// cloudinary.config({ 
//   cloud_name: 'dhtkzyncr', 
//   api_key: '148961475255687', 
//   api_secret: '6BPN3SlTSgYhr6Y_FEVW5ecnyos'
// });

// mongoose.connect('mongodb+srv://Trapti:tkg4002@cluster0.a97rcaf.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });


// const birdSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   image: String
// });


// const Bird = mongoose.model('Bird', birdSchema);

// app.get('/birds', async (req, res) => {
//   try {
//     const birdData = await Bird.find();
//     res.json(birdData);
//   } catch (error) {
//     console.error('Error fetching bird data:', error);
//     res.status(500).json({ error: 'Error fetching bird data' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
const express = require('express');
const cors = require('cors');
const fileUpload = require("express-fileupload")
const cloudinary = require("cloudinary").v2;
const mongoose = require('mongoose');

const app = express();
const port = 8001;

app.use(cors());
app.use(express.json());

app.use(fileUpload({
  useTempFiles:true
}))

cloudinary.config({ 
  cloud_name: 'dhtkzyncr', 
  api_key: '148961475255687', 
  api_secret: '6BPN3SlTSgYhr6Y_FEVW5ecnyos' 
});

mongoose.connect('mongodb+srv://Trapti:tkg4002@cluster0.a97rcaf.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.post('/adddata', async (req, res) => {
  try {
    const { name, price, type } = req.body;
    
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    const file = req.files.image; 

    cloudinary.uploader.upload(file.tempFilePath, async (error, result) => {
      if (error) {
        console.error("Error occurred while uploading image:", error);
        return res.status(500).send('Error uploading image to Cloudinary');
      }

      
      try {
        let model;
        switch (type) {
          case "bird":
            model = Bird;
            break;
          case "cat":
            model = Cat;
            break;
          case "fish":
            model = Fish;
            break;
          case "dog":
            model = Dog;
            break;
          default:
            return res.status(400).send('Invalid type');
        }
        const newItem = new model({
          name: name,
          price: price,
          image: result.secure_url 
        });
        await newItem.save();
        res.send('Data received and saved successfully');
      } catch (error) {
        console.error("Error saving data to MongoDB:", error);
        res.status(500).send('Error saving data to MongoDB');
      }
    });
  } catch (error) {
    console.error("Error occurred while processing data:", error);
    res.status(500).send('Internal server error');
  }
});

//Birds Schema

const birdSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});


const Bird = mongoose.model('Bird', birdSchema);

app.get('/birds', async (req, res) => {
  try {
    const birdData = await Bird.find();
    res.json(birdData);
  } catch (error) {
    console.error('Error fetching bird data:', error);
    res.status(500).json({ error: 'Error fetching bird data' });
  }
});

//Cats Schema

const catSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});


const Cat = mongoose.model('Cats', catSchema);

app.get('/cats', async (req, res) => {
  try {
    const catData = await Cat.find();
    res.json(catData);
  } catch (error) {
    console.error('Error fetching bird data:', error);
    res.status(500).json({ error: 'Error fetching bird data' });
  }

  
});



//Fish Schema

const fishSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});


const Fish = mongoose.model('Fishs', fishSchema);

app.get('/fishs', async (req, res) => {
  try {
    const fishData = await Fish.find();
    res.json(fishData);
  } catch (error) {
    console.error('Error fetching fish data:', error);
    res.status(500).json({ error: 'Error fetching fish data' });
  }
});

//Dog Schema

const dogSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});


const Dog = mongoose.model('Dogs', dogSchema);

app.get('/dogs', async (req, res) => {
  try {
    const dogData = await Dog.find();
    res.json(dogData);
  } catch (error) {
    console.error('Error fetching dog data:', error);
    res.status(500).json({ error: 'Error fetching dog data' });
  }
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
