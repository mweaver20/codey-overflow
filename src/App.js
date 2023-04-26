import React from 'react';
import { comments } from './commentData.js'
import Card from './Card.js';

function App() {
  return(
    comments.map(comment => <Card commentObject={comment}/>)
  );
}

export default App;