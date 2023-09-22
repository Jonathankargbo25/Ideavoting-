import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import IdeaDisplay from './IdeaDisplay';
import HomePage from './HomePage';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import SubmitIdeaForm from './SubmitIdeaForm';
import Footer from './Footer';

// import Ideacard from './IdeaCard';




function App() {
  const [ideas, setIdeas] = useState([
    {
      title: 'Decentralized Finance (DeFi) Platform',
      description: 'Create a DeFi platform for lending, borrowing, and trading cryptocurrencies.',
      votes: 0,
    },
    {
      title: 'Solana-Based NFT Marketplace',
      description: 'Build an NFT marketplace on the Solana blockchain for digital art and collectibles.',
      votes: 0,
    },
    {
      title: 'Decentralized Identity Verification System',
      description: 'Develop a self-sovereign identity verification system using Solana.',
      votes: 0,
    },
    {
      title: 'Solana Cross-Chain Bridge',
      description: 'Create a bridge to facilitate interoperability between Solana and other blockchains.',
      votes: 0,
    },
    {
      title: 'Solana-Based DEX (Decentralized Exchange)',
      description: 'Build a DEX on Solana for seamless cryptocurrency trading.',
      votes: 0,
    },
    {
      title: 'Solana-Based Gaming Platform',
      description: 'Develop a blockchain-based gaming platform on Solana with NFT integration.',
      votes: 0,
    },
    {
      title: 'Solana Smart Contract Audit Service',
      description: 'Offer smart contract auditing services to ensure the security of Solana-based applications.',
      votes: 0,
    },
    {
      title: 'Solana-Based Stablecoin',
      description: 'Create a stablecoin on the Solana blockchain to facilitate stable transactions.',
      votes: 0,
    },
    {
      title: 'Solana-Based Supply Chain Solution',
      description: 'Implement a blockchain solution on Solana to track and verify the authenticity of products in the supply chain.',
      votes: 0,
    },
    {
      title: 'Solana-Based Healthcare Data Management',
      description: 'Build a system for securely storing and sharing healthcare data on the Solana blockchain.',
      votes: 0,
    },
    {
      title: 'Solana-Based Governance DAO',
      description: 'Create a Decentralized Autonomous Organization (DAO) for decentralized decision-making on the Solana network.',
      votes: 0,
    },
    {
      title: 'Solana-Based Educational Platform',
      description: 'Develop an educational platform on Solana for online learning and certifications.',
      votes: 0,
    },
    {
      title: 'Solana-Based Non-Profit Fundraising',
      description: 'Build a platform for non-profit organizations to raise funds transparently on the Solana blockchain.',
      votes: 0,
    },
    {
      title: 'Solana-Based Music Streaming Service',
      description: 'Create a music streaming service on Solana that rewards artists with cryptocurrency for their work.',
      votes: 0,
    },
    {
      title: 'Solana-Based Weather Data Marketplace',
      description: 'Develop a marketplace for buying and selling weather data using Solana smart contracts.',
      votes: 0,
    },
    // Add more ideas here
  ]);

  function newIdeaSubmit(newIdea) {
    setIdeas((prev) => [newIdea, ...prev])
  }
  function newVote(newIdeaVote) {
   setIdeas(newIdeaVote)
  }
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ideas" element={<IdeaDisplay ideasData={ideas} onNewVote={newVote} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/submitideaform' element={<SubmitIdeaForm onSaveNewIdea={newIdeaSubmit}/>} />
        </Routes>
     <Footer/>
    </div>
  );
}

export default App;
