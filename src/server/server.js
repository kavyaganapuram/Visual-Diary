const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const ext = path.extname(file.originalname);
    const newFilename = formattedDate + '-' + file.originalname;
    cb(null, newFilename);
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.array('images', 10), (req, res) => {
  const imageUrls = req.files.map(file => ({
    filename: file.filename,
    imageUrl: `http://localhost:${port}/uploads/${file.filename}`,
  }));
  res.json({ imageUrls });
});

app.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  const imagePath = path.join(__dirname, 'uploads', filename);
  res.sendFile(imagePath);
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

function formatDate(date) {
  const options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});