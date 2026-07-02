import React from 'react';

export const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AI All-in-One Platform" />
        <title>AI All-in-One Platform</title>
      </head>
      <body className="bg-light dark:bg-dark text-dark dark:text-light transition-colors">
        {children}
      </body>
    </html>
  );
};
