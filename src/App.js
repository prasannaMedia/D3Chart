import React from 'react';
import data from './data/data.json';
import { GraphWrapper } from "./components/graphWrapper";
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        AccuKnox Node Graph
      </header>
      <section className="Main">
        <GraphWrapper linksData={data.links} nodesData={data.nodes} />
      </section>
    </div>
  );
}

export default App;
