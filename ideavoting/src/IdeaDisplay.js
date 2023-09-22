import React from 'react';
import './IdeaDisplay.css';

const IdeaDisplay = (props) => {
  const handleVoteClick = (index) => {
    const updatedIdeas = [...props.ideasData];
    updatedIdeas[index].votes++;
    console.log(`Voted for idea: ${updatedIdeas[index].title}, Votes: ${updatedIdeas[index].votes}`);
    props.onNewVote(updatedIdeas);
  };

  // Render the list of ideas with voting buttons
  return (
    <div className="idea-list">
      {props.ideasData.map((idea, index) => (
        <div className="idea-card" key={index}>
          <h3>{idea.title}</h3>
          <p>{idea.description}</p>
          <div className="vote-section">
            <button onClick={() => handleVoteClick(index)}>Vote</button>
            <p>Votes: {idea.votes}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IdeaDisplay;
