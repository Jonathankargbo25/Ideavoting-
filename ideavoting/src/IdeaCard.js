import React, { useState } from 'react';

function Ideacard() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      return;
    }

    // onIdeaSubmit({ title, description });
    // setTitle('');
    // setDescription('');
  };

  return (
    <div>
      <h2>Submit Your Idea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Ideacard;