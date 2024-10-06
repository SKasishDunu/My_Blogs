import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author }

    setIsPending(true);

    fetch('http://localhost:800/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('newblog added');
      setIsPending(false);
      history.push('/');
    })

  }

  return (
    <div className='create'>
      <h2>Add a New Blog..</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input 
          type="text"
          required
          value={ title }
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body: </label>
        <textarea
          required
          value={ body }
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author: </label>
        <input 
          type="text"
          required
          value={ author }
          onChange={(e) => setAuthor(e.target.value)}
        />
          { !isPending && <button className='button'>Add blog</button> }
          { isPending && <button className='button' disabled>Adding Blog...</button> }
        
      </form>
      
    </div>
  );
}

export default Create;
