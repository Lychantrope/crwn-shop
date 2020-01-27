import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

const HatsPage = (props) => {
  console.log(props);
  return(
    <div>
    <h1>Hats Page</h1>
  </div>
  )
  
}

const TopicsList = (props) => {
  console.log(props);
  return(
  <div>
    <h1>Topics List</h1>
  </div>
);
}

const TopicDetail = (props) => {
  console.log(props);
  return(
  <div>
    <h1>Topics Detail: {props.match.params.topicId}</h1>
  </div>
);
}


function App() {
  return (
    <div className="App">
      {/* <Switch> */}
        <Route exact path='/' component={Homepage} />
        <Route exact path='shop/hats' component={HatsPage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route exact path='/topics/:topicId' component={TopicDetail} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
