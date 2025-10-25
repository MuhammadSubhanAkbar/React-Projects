import { useState } from 'react'
import './index.css'

const App = () => {

    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const addNoteTitle = () => {
        if (title.trim() === '') {
            alert('Please enter a valid title');
            return;
        }

        const newNote = {
            id: Date.now(),
            title: title,
            content: content,
            date: new Date().toLocaleString()
        }

        setNotes([...notes, newNote]);
        setTitle('');
        setContent('');
        console.log(newNote);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">
                <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Notes App</h1>

                {/* Input Form */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Enter Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                        placeholder="Enter Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="4"
                        cols="50"
                        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    />
                    <button
                        onClick={addNoteTitle}
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        Add Note
                    </button>
                </div>

                {/* Display Notes */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Your Notes ({notes.length})</h2>

                    {notes.length === 0 ? (
                        <p className="text-gray-500 text-center">No notes yet. Add your first note!</p>
                    ) : (
                        <div className="space-y-4">
                            {notes.map((note) => (
                                <div
                                    key={note.id}
                                    className="border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
                                    <p className="text-gray-600 mt-2 mb-3">{note.content}</p>
                                    <small className="text-sm text-gray-400">Created: {note.date}</small>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
