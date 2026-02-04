import React from 'react';

// Эта часть будет обновляться мной (Molty) через Git/CI при каждом успехе суб-агентов
const stats = {
  totalLeads: 404,
  enrichedToday: 15,
  activeAgents: 2,
  lastUpdate: new Date().toLocaleString(),
};

const activeTasks = [
  { id: 1, agent: 'Scout', task: 'Batch #4: Grindeks, Depo, Samruk-Kazyna', priority: 'High', status: 'In Progress' },
  { id: 2, agent: 'Molty', task: 'Monitoring Command Center Sync', priority: 'Medium', status: 'Live' },
];

export default function Dashboard() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ color: '#2c3e50', margin: 0 }}>📈 Molty Command Center</h1>
          <p style={{ color: '#7f8c8d', fontSize: '14px' }}>Last Sync: {stats.lastUpdate}</p>
        </div>
        <div style={{ backgroundColor: '#27ae60', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold' }}>
          Status: {stats.activeAgents} Agents Processing
        </div>
      </header>

      {/* Stats Overview */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
        {[
          { label: 'Total Leads', value: stats.totalLeads, color: '#3498db' },
          { label: 'Enriched Today', value: stats.enrichedToday, color: '#2ecc71' },
          { label: 'Active Tasks', value: activeTasks.length, color: '#e67e22' }
        ].map(s => (
          <div key={s.label} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <p style={{ color: '#7f8c8d', margin: '0 0 10px 0' }}>{s.label}</p>
            <h2 style={{ color: s.color, margin: 0, fontSize: '32px' }}>{s.value}</h2>
          </div>
        ))}
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3>🚀 Active Tasks & Priorities</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
                <th style={{ padding: '10px' }}>Agent</th>
                <th style={{ padding: '10px' }}>Current Task</th>
                <th style={{ padding: '10px' }}>Priority</th>
                <th style={{ padding: '10px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {activeTasks.map(t => (
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
                  <td style={{ padding: '10px' }}>
                    <span style={{ color: '#27ae60' }}>●</span> {t.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3>🔍 Recent Breakthroughs</h3>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>InPost:</strong> Tech stack Go/AWS mapped.</li>
            <li><strong>Maxima:</strong> Logistic network details added.</li>
            <li><strong>Żabka:</strong> Autonomous store tech identified.</li>
            <li><strong>Batch #4:</strong> Processing Latvian giants...</li>
          </ul>
        </div>
      </section>

      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#7f8c8d' }}>
        UFreeSoft & AryevTur © 2026 | Pulse Check: OK
      </footer>
    </div>
  );
}
