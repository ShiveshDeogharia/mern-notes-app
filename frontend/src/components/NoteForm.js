// frontend/src/components/NoteForm.js
import React, { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ onNoteAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) return alert('Title and content are required.');

    try {
      const res = await axios.post('http://localhost:5000/api/notes', {
        title,
        content,
      });
      onNoteAdded(res.data); // pass the new note back to parent
      setTitle('');
      setContent('');
    } catch (err) {
      console.error('Error creating note:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Create Note</h2>
      <div>
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '300px', marginBottom: '10px' }}
        />
      </div>
      <div>
        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          style={{ width: '300px' }}
        />
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>Add Note</button>
    </form>
  );
};

export default NoteForm;
