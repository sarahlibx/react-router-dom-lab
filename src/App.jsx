// src/App.jsx
import './App.css';
import { Route, Routes } from 'react-router';
import { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

   const addMailbox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  };

  return ( 
  <>
    <NavBar />
    <h1>Mailbox List</h1>
    <Routes>
      <Route path='/' element={<main><h2>Post Office</h2></main>} />
      <Route path = '/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
      <Route path = '/new-mailbox' element={<MailboxForm addMailbox={addMailbox} />} />
      <Route path = '/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
      <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
    </Routes>
  </>
  );
};

export default App;
