import React from "react";
import Navbar from "./componets/Navbar/Navbar";
import './App.css'
import Banner from "./componets/Banner/Banner";
import Row from "./componets/Rowpost/Row";
import { orginals,action,comedy,horror,documentarie} from "./urls";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row url={orginals} title='Netflix Originals'/>
      <Row url={action} title='Actions' isSmall/>
      <Row url={comedy} title='Comedy' isSmall/>
      <Row url={horror} title='Horror' isSmall/>
      <Row url={documentarie} title='Documentaries' isSmall/>
    
    </div>
  );
}

export default App;
