const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')
// const morgan = require('morgan')

const PORT = process.env.PORT || 5000

const app = express();

// CORS Middleware
app.use(cors());
// Logger Middleware
// app.use(morgan('dev'));
// Bodyparser Middleware
app.use(bodyParser.json());

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
   // Set static folder
   app.use(express.static('client/build'));

   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}

app.get('/api', (req, res) => {
   res.json({
      id: 1,
      name: 'Tomasz',
      surname: 'Ogonowski'
   })
})

app.listen(PORT, () => console.log(`Server is listening at http://localhost:${PORT} ...`));