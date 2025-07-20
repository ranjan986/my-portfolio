import React, { useEffect, useState } from 'react';
import './Admin.css';
import axios from 'axios';

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ← controls switching

  useEffect(() => {
    if (isLoggedIn) {
      const fetchMessages = async () => {
        try {
          const res = await axios.get('https://portfolio-backend-mnfh.onrender.com/api/contact');
          setMessages(res.data);
        } catch (err) {
          console.error("Failed to fetch messages", err);
        }
      };
      fetchMessages();
    }
  }, [isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post('https://portfolio-backend-mnfh.onrender.com/api/admin/messages', { password });
      if (res.status === 200) {
        alert("Login Successful!");
        setIsLoggedIn(true); // ← switch to showing messages
      } else {
        alert("Login failed.");
      }
    } catch (err) {
      alert("Invalid password or server error.");
    }
  };

  return (
    <section className="admin" id='admin'>
      <h2>Admin Panel - Contact Messages</h2>

      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className='form-container'>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Admin Password"
            required
          />
          <button type="submit">View Messages</button>
        </form>
      ) : (
        <div className="messages">
          {messages.length === 0 ? (
            <p>No messages yet.</p>
          ) : (
            messages.map((msg, index) => (
              <div className="message-card" key={index}>
                <h3>{msg.name}</h3>
                <p><strong>Email:</strong> {msg.email}</p>
                <p><strong>Message:</strong> {msg.message}</p>
                <p className="date">{new Date(msg.createdAt).toLocaleString()}</p>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default Admin;
