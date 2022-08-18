import React from 'react';
import { App } from './App';
import { createRoot } from 'react-dom/client';

/**
 * Тут происходит рендер реакт-приложения.
 * Root - корневой элемент, в который производится рендеринг компонента App.
 */
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
