const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
 app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


app.get('/', (req, res, next) => {
    let data = {
        name: "Adrian",
        surName: "Ajvazi",
        bootcamp: "IronHack"
      }
    // send views/index.hbs for displaying in the browser
    res.render('index', data);
  });

  

  app.get('/about', (req, res, next) => {
    let data = {
        name: "Adrian",
        surName: "Ajvazi",
      }
    // send views/about.hbs for displaying in the browser
    res.render('about', data);
  });


app.listen(4000, () => {
    console.log('My first app listening on port 4000!')
})



