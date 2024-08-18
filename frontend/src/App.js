import React, { useState } from 'react';

function App() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Message Sender</h1>
            <input
                type="text"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ marginRight: '10px' }}
            />
            <button onClick={sendMessage}>Send Message</button>
            <p>{response}</p>
        </div>
    );
}

export default App;
