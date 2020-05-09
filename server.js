// Requires
const express = require ( 'express' );
const app = express ();
const hbs = require ( 'express-handlebars');
const path = require('path');
const apiRoutes = require(path.join(__dirname, "./routes/api"));
const htmlRoutes = require(path.join(__dirname, "./routes/html"));
console.table(apiRoutes);

//express handlebars
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

//set public folder as a static route
app.use(express.static('public'));

//using router
app.use("/api", apiRoutes);
app.use("/html", "htmlRoutes");

app.get("*", (req, res) => {
    res.redirect("/html")
})

app.listen(8080, () => {
    console.log("Connected...");
})