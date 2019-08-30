let port = 5000;
let express = require("express");
let myApp = express();

myApp.use(express.urlencoded({ extended: false }));

myApp.get("/", (req, res) => {
  res.send(`
    <form action="/answer" method="POST"><p>What color is the sky on a clear sunny day?</p>
    <input name="skyColor" autocomplete="off">
    <button>Submit Answer</button>

    </form>
    `);
});

myApp.post("/answer", (req, res) => {
  if (req.body.skyColor.toUpperCase() == "BLUE") {
    res.send(
      `<p>Congrats, thats is correct answer!</p>
        <a href="/">Back to Home page</a>
    
    `
    );
  } else {
      res.send(
    `<p>Wrong Answer!!!</p>
        <a href="/">Back to Home page</a>
    
    `)
  }
});

myApp.listen(port, console.log(`App is running at port ${port}`));
