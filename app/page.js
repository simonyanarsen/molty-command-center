import React from 'react';

const tasks = [
  { id: 1, agent: 'Scout', task: 'Enriching: Biedronka (Poland)', priority: 'High', status: 'In Progress' },
  { id: 2, agent: 'Dev', task: 'Building Command Center UI', priority: 'High', status: 'Active' },
  { id: 3, agent: 'Scout', task: 'Cis Lead Search (Batch #2)', priority: 'Medium', status: 'Queued' },
];

export default function Dashboard() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#2c3e50' }}>📈 Molty Command Center</h1>
        <div style={{ backgroundColor: '#27ae60', color: 'white', padding: '10px 20px', borderRadius: '8px' }}>
          Status: All Agents Online
        </div>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3>🚀 Active Tasks & Priorities</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
                <th style={{ padding: '10px' }}>Agent</th>
                <th style={{ padding: '10px' }}>Task</th>
                <th style={{ padding: '10px' }}>Priority</th>
                <th style={{ padding: '10px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(t => (
                <tr key={t.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>{t.agent}</td>
                  <td style={{ padding: '10px' }}>{t.task}</td>
                  <td style={{ padding: '10px' }}>
                    <span style={{ 
                      backgroundColor: t.priority === 'High' ? '#e74c3c' : '#f1c40f', 
                      color: 'white', 
                      padding: '4px 8px', 
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}>{t.priority}</span>
                  </td>
                  <td style={{ padding: '10px' }}>{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3>🔍 Live Intelligence (Scout)</h3>
          <p><strong>Current Target:</strong> Biedronka (Jeronimo Martins)</p>
          <ul style={{ lineHeight: '1.6' }}>
            <li>✅ Found HQ: ul. Żniwna 5, Kostrzyn</li>
            <li>✅ Tech Stack: SAP, Oracle, Blue Yonder</li>
            <li>✅ Employees: 84,000</li>
            <li>⏳ Searching for Logistics Director contacts...</li>
          </ul>
        </div>
      </section>

      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#7f8c8d' }}>
        UFreeSoft & AryevTur © 2026 | Managed by Molty
      </footer>
    </div>
  );
}
