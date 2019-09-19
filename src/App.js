import React from 'react';

function Food({fav, info}) {
  
  return  <div><h1>I like {fav}</h1>
          <div>{info}</div></div>;
}

const foodIlike = [
  {
    key : 1,
    name : "kimchi",
    info : "red, korea traditional food"
  },
  {
    key: 2,
    name : "bulgogi",
    info : "beef, korea traditional food"
  }
];

function renderFood(item) {
  console.log(item);
  return <Food key={item.key} fav={item.name} info={item.info}/>;
}

function App() {
  return  <div>
            <h1>Hello React!</h1>
            {foodIlike.map(renderFood)} 
          </div>;
}

export default App;
