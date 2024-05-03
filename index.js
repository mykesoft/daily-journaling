const express = require('express'); 
const app = express(); 

// Set EJS as templating engine 
app.set('view engine', 'ejs');

// Function to serve all static files
// inside public directory.
app.use(express.static('public'));
app.use('/public', express.static('public'));

app.get('/', (req, res) => { 

	let data = { 
		name: 'Akashdeep', 
		hobbies: ['playing football', 'playing chess', 'cycling'] 
	} 

	res.render('home', { data: data }); 
});

app.get('/home', (req, res) => { 

	let data = { 
		name: 'Akashdeep', 
		hobbies: ['playing football', 'playing chess', 'cycling'] 
	} 

	res.render('home', { data: data }); 
}); 

app.get('/daily-page', (req, res) => { 

	let data = { 
		name: 'Akashdeep', 
		hobbies: ['playing football', 'playing chess', 'cycling'] 
	} 

	res.render('daily-page', { data: data }); 
});

app.get('/history', (req, res) => { 

	let data = { 
		name: 'Akashdeep', 
		hobbies: ['playing football', 'playing chess', 'cycling'] 
	} 

	res.render('history', { data: data }); 
});


app.get('/page', (req, res) => { 

	let data = { 
		name: 'Akashdeep', 
		hobbies: ['playing football', 'playing chess', 'cycling'] 
	} 

	res.render('page', { data: data }); 
});

app.get('/search', (req, res) => { 

	let data = { 
		name: 'Akashdeep', 
		hobbies: ['playing football', 'playing chess', 'cycling'] 
	} 

	res.render('search', { data: data }); 
});


app.get('/about', (req, res) => { 

	let data = { 
		name: 'Akashdeep', 
		hobbies: ['playing football', 'playing chess', 'cycling'] 
	} 

	res.render('about', { data: data }); 
});

const server = app.listen(4000, function () { 
	console.log('listening to port 4000') 
});