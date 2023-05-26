import Home from './components/Home'
import Page from './components/Page'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  //const regions = ["na", "sa", "weu", "eeu", "cn", "sea"]

  return (
    <Router>
      <div className="app">
        <div className="app-header">
          <Routes className="routes">
            <Route path="/" exact element={<Home />} />
            {/* <Route path="quals/na" exact element={<Page leagueID="14889" />} />
            <Route path="quals/sa" exact element={<Page leagueID="14902" />} />
            <Route path="quals/weu" exact element={<Page leagueID="14891" />} />
            <Route path="quals/eeu" exact element={<Page leagueID="14856" />} />
            <Route path="quals/cn" exact element={<Page leagueID="14861" />} />
            <Route path="quals/sea" exact element={<Page leagueID="14854" />} /> */}
            <Route path="div1/na" exact element={<Page leagueID="15350" />} />
            <Route path="div1/sa" exact element={<Page leagueID="15365" />} />
            <Route path="div1/weu" exact element={<Page leagueID="15351" />} />
            <Route path="div1/eeu" exact element={<Page leagueID="15335" />} />
            <Route path="div1/cn" exact element={<Page leagueID="15383" />} />
            <Route path="div1/sea" exact element={<Page leagueID="15374" />} />
            {/* <Route path="div2/na" exact element={<Page leagueID="" />} />
            <Route path="div2/sa" exact element={<Page leagueID="" />} />
            <Route path="div2/weu" exact element={<Page leagueID="" />} />
            <Route path="div2/eeu" exact element={<Page leagueID="" />} />
            <Route path="div2/cn" exact element={<Page leagueID="" />} />
            <Route path="div2/sea" exact element={<Page leagueID="" />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
