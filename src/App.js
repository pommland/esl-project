import React from 'react';
import './App.css';

import { ClockApp, TodoListApp, WeatherApp, GreetingApp } from './components';

function App() {
  return (
    <div>
      <ClockApp />
      <TodoListApp />
      <WeatherApp />
      <GreetingApp />
    </div>
  );
}

export default App;
