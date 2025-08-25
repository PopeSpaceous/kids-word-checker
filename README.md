# KidSafe Word API

A simple REST API that checks if a **5-letter word** is safe for kids.  
The API compares the given word against a master list of inappropriate words and returns a JSON response indicating whether the word is safe.

---

## 🚀 Features
- Accepts a `word` parameter via query string.
- Validates only **5-letter words**.
- Returns JSON with:
  - The input word
  - A boolean flag (`true`/`false`) indicating if the word is safe for kids
- Lightweight and easy to integrate into applications or games.

---

## 📡 Endpoint

### `GET /check-word?word=<your_word>`

#### Example Request
GET http://localhost:8080/check-word?word=apple
#### Example Response
```json
{
  "Word": "apple",
  "isSafeForKids": true
}
```
#### Example Request
GET http://localhost:8080/check-word?word=curse
#### Example Response
```
{
  "Word": "curse",
  "isSafeForKids": false
}
```
