// frontend/src/components/NotesList.js
import React, { useState } from 'react';
import axios from 'axios';

const NotesList = ({ notes, onDelete, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const startEditing = (note) => {
    setEditingId(note._id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditTitle('');
    setEditContent('');
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/notes/${editingId}`, {
        title: editTitle,
        content: editContent
      });
      onUpdate(res.data); // send updated note to App.js
      cancelEditing();
    } catch (err) {
      console.error('Error updating note:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      onDelete(id);
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };



  return (
    <div>
      <h2>All Notes</h2>
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul>
          {notes.map(note => (
            <div className="note">
            <li key={note._id} style={{ marginBottom: '20px' }}>
              {editingId === note._id ? (
                <div>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    style={{ width: '250px' }}
                  /><br />
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    rows={4}
                    style={{ width: '250px' }}
                  /><br />
                  <button onClick={handleUpdate} style={{ marginRight: '10px' }}>Save</button>
                  <button onClick={cancelEditing}>Cancel</button>
                </div>
              ) : (
                <div>
                  <strong>{note.title}</strong><br />
                  {note.content}<br />
                  <button
                    onClick={() => startEditing(note)}
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(note._id)}
                    style={{ backgroundColor: 'red', color: 'white' }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li></div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;
