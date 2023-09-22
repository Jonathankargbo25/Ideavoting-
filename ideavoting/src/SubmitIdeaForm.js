import React, { useState } from 'react';
import './SubmitIdeaForm.css';

const SubmitIdeaForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !title.trim() || !description.trim()) {
      return;
    }

    const newIdea = {
      firstName,
      lastName,
      title,
      description,
    };

    props.onSaveNewIdea(newIdea)
    console.log(newIdea)

    // Clear the form fields after submission
    setFirstName('');
    setLastName('');
    setTitle('');
    setDescription('');
  };

  return (
    <div className='submitIdea-container'>
      <h2>Submit Your Idea</h2>
      <form onSubmit={handleSubmit}>
        <div className='name-section'>
          <div className='controls'>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className='controls'>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='controls'>
          <label htmlFor="title">Idea Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className='controls'>
          <label htmlFor="description">Idea Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className='submit-button'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SubmitIdeaForm;
