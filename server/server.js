//node server/server.js
//http://localhost:3000/public/index.html
//......
const path = require('path');
//...... 
const express = require('express');

//...... 
const publicPath = path.join(__dirname, '../public');

//...... para na CLI, ver as diferenças na construção do path;
//console.log( __dirname + '/../public' );
//console.log( 'publicPath:::' + publicPath );


//...... 
var app = express();

//...... Midleware
app.use( express.static(publicPath) );		//(__dirname + '/public'));

//...... 
app.get('/', ( req, res ) => {
				res.send('<h1>WELCOME!!!!!!!!!!!!!!!!!!!</h1>');
			});
//......
/*
//...... 
app.get('/about-template-basic', ( req, res ) => {
					
					res.render( 'about-template-basic.hbs', {
												pageTitle:'This is About Page for about-template-basic.hbs'
											}	
						
					);
				});	
*/
//...... 
app.listen(3000, () => {
	console.log("Express listen in http://localhost:3000/")
});