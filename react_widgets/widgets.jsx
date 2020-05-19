import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx'; 
import Tabs from './tabs.jsx';

const arr = [
  {title: "one",
   content: "I am the first"},
  {title: "two",
   content: "Second pane here"},
  {title: "three",
   content: "Third pane here"}
]

// this.props.arr

// functional component that returns a div containing the other components

// WORKING Root
const Root = () => {
  return (
    <>
      <Clock />
      <Tabs arr={arr}/>
    </>
  );
};

// WORKING
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});

// // TESTING
// const Root = (props) => {
//   return (
//     <>
//       <{this.props.prop} />
//     </>
//   );
// }

// // TESTING
// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById("root");
//   ReactDOM.render(<Root prop={Clock}/>, root);
// });