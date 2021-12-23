import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('no context found');
  }

  return context;
}
