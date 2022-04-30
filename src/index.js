import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forfex from './components/Forfex';
import Possibility from './components/Possibility';
import Master from './components/Master';
import Scheme from './components/Scheme';
import Consumate from './components/Consumate';
import Innards from './components/Innards';
import Their from './components/Their';
import Shepherd from './components/Shepherd';
import Mortal from './components/Mortal';
import Pardon from './components/Pardon';
import './style.css';
import './index.css'
import './App.css';
import Punishment from './components/Punishment';
import Defenseless from './components/Defenseless';

ReactDOM.render(
    <Router>
       <Routes>
		      <Route exact path="/" element={<Forfex/>}/>
				  <Route path="/possibility" element={<Possibility/>}/>
		      <Route path="/master" element={<Master/>}/>
				  <Route path="/scheme" element={<Scheme/>}/>
          <Route path="/consumate" element={<Consumate/>}/>
		      <Route path="/innards" element={<Innards/>}/>
				  <Route path="/their" element={<Their/>}/>
				  <Route path="/shepherd" element={<Shepherd/>}/>
				  <Route path="/mortal" element={<Mortal/>}/>
				  <Route path="/pardon" element={<Pardon/>}/>
				  <Route path="/punishment" element={<Punishment/>}/>
				  <Route path="/defenseless" element={<Defenseless/>}/>


	    </Routes>
    </Router>,
    document.getElementById('root')
);
