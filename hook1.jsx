// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Create a provider component to manage the theme state
export const ThemeProvider = ({ children }) => {
  // State to track the current theme
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provide the theme and toggle function to the context
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Helper function to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};







// App.js
import React, { useContext } from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';

// Main App component
const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

// ThemedApp component that uses the theme context
const ThemedApp = () => {
  // Use the context directly without a custom hook
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: theme === 'light' ? '#ffffff' : '#333333', color: theme === 'light' ? '#000000' : '#ffffff' }}>
      {/* Display the current theme */}
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      {/* Toggle button to switch themes */}
      <ToggleThemeButton onClick={toggleTheme} />
    </div>
  );
};

// ToggleThemeButton component
const ToggleThemeButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ margin: '16px' }}>
      Toggle Theme
    </button>
  );
};

export default App;
