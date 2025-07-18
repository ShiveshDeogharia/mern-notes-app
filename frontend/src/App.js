// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import axios from 'axios';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    axios.get('http://localhost:5000/api/notes')
      .then(res => setNotes(res.data))
      .catch(err => console.error('Error fetching notes:', err));
  };

  const handleDelete = (id) => {
    setNotes(prev => prev.filter(note => note._id !== id));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleUpdate = (updatedNote) => {
  setNotes(prev =>
    prev.map(note => (note._id === updatedNote._id ? updatedNote : note))
  );
};

return (
  <div className="container">
    <h1>MERN Notes App</h1>
    <NoteForm onNoteAdded={fetchNotes} />
    <NotesList
      notes={notes}
      onDelete={handleDelete}
      onUpdate={handleUpdate}
    />
  </div>
);
}




export default App;
