const express = require('express');
const app = express();
const port = 8080; // Choose any port you prefer
const fs = require('fs');
var cors = require('cors')
const path = require('path');

app.use(cors({ origin: false }));


// Load bad words into an array
const badWordsPath = path.join(__dirname, 'badWords.txt');
let badWords = [];

try {
  const data = fs.readFileSync(badWordsPath, 'utf-8');
  badWords = data.split(/\r?\n/).map(word => word.trim().toUpperCase()).filter(Boolean);
  console.log(`Loaded ${badWords.length} bad words.`);
} catch (err) {
  console.error('Failed to load badWords.txt:', err);
}

// Define your routes and middleware here

app.get('/check-word', (req, res) => {
  const word = req.query.word;

  if (!word) {
    console.log("Word was not given");
    return res.status(400).json({ error: 'Missing "word" query parameter' });
  }
  // Example: perform a basic check (you can replace this with real logic)

 const isBad = badWords.includes(word.toUpperCase());
  res.json({
    "Word": word,
    isSafeForKids: !isBad
  });
});





app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
