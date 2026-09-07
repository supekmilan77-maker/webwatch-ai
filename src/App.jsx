import React, { useState, useEffect } from 'react';
import { supabase } from './supabase.js';

export default function App() {
  const [url, setUrl] = useState('');
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWebsites();
  }, []);

  async function fetchWebsites() {
    try {
      const { data, error } = await supabase.from('websites').select('*');
      if (error) console.error(error);
      else if (data) setWebsites(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('websites')
        .insert([{ url, status: 'online' }])
        .select();

      if (error) {
        alert('Chyba pri ukladaní: ' + error.message);
      } else if (data) {
        setWebsites([...websites, ...data]);
        setUrl('');
      }
    } catch (err) {
      alert('Chyba: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', color: '#fff', backgroundColor: '#0f172a', minHeight: '100vh' }}>
      <h1>WebWatch AI</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="url"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button type="submit" disabled={loading} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          {loading ? 'Ukladám...' : 'Spustiť monitoring'}
        </button>
      </form>

      <h2>Monitorované weby</h2>
      <ul>
        {websites.map((site) => (
          <li key={site.id || site.url} style={{ margin: '5px 0' }}>
            {site.url} - <strong>{site.status || 'ONLINE'}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
