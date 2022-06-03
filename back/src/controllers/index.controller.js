const { Pool } = require('pg');

const pool = new Pool({
	host: 'localhost',
	user: 'postgres',
	pass: '',
	database: 'postsdb',
	port: '5432'
})

// function to get posts
const getPosts = async (req, res) => {
	const response = await pool.query('SELECT * FROM posts');
	console.log(response.rows);
	res.status(200).json(response.rows);
}

//function to create post
const createPost = async (req,res) => {
	const { name, description } = req.body;
	console.log(name, description)
	const response = await pool.query('INSERT INTO posts (name,description) VALUES ($1, $2)', [name, description]);
	res.json({
		message: 'Post creado correctamente§',
		body: {
			post: {name, description}
		}
	})
}

const deletePost = async (req, res) => {
	const id = parseInt(req.params.id);
	const post = await pool.query('SELECT * FROM posts where id = $1', [id]);
	const response = await pool.query('DELETE FROM posts WHERE id = $1', [id]);
	res.json({
		message: 'Post deleted succesfully',
		post: post.rows[0]
	})
}


module.exports = {
	getPosts,
	createPost,
	deletePost
}
