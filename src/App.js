// import React from 'react';
import './App.scss'
import Search from './components/search';
import Weather from './components/Weather';
import React, { useState } from 'react';



function App() {

  const [data, setData] = useState({});
  return (
    <div className="app">

      <header className="app__header">
<Search  setData={setData} />
      </header>

      <main className="app__main">
      </main>
      <Weather data={data} />


    </div>
  );
}


export default App;
