import React from 'react';

export const metadata = {
  title: 'Molty Command Center',
  description: 'UFreeSoft & AryevTur Management Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
