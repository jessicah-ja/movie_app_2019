import React from 'react';
import PropTypes from 'prop-types';


const foodIlike = [
  {
    key : 1,
    name : "kimchi2",
    info : "red, korea traditional food",
    rating : 5
  },
  {
    key: 2,
    name : "bulgogi",
    info : "beef, korea traditional food"
  }
];

function Food({name, info, rating}) {
  
  return  <div>
            <h1>I like {name}</h1>
            <h2>{rating}</h2>
            <div>{info}</div>
          </div>;
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  info:PropTypes.string.isRequired,
  rating:PropTypes.number
};


function App() {
  return  <div>
            <h1>Hello React!</h1>
            {foodIlike.map(item => <Food key={item.key} name={item.name} info={item.info} rating={item.rating}/>)} 
          </div>;
}

export default App;
