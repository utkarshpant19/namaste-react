import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import userIcon from './user-icon.png';

/*

Create a Nested Header element using React.createElement(h1,h2,h3 inside div, with class 'title`)

    - Create Same Element using JSX
    - Create a Functional Component of the same using JSX
    - Pass attributes into the tag in JSX
    - Composition of Component (Add a Component inside another)

*/

// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

// const header = React.createElement('div', {className: 'title'}, [

//     React.createElement(
//         'h1', {}, 'This is a h1 heading'
//     ),
//     React.createElement(
//         'h2', {}, 'This is a h2 heading'
//     ),
//     React.createElement(
//         'h3', {}, 'This is a h3 heading'
//     )
// ] );

// Q: Create Same Element using JSX

// const header = <div className="title">
//     <h1>This is a h1 heading</h1>
//     <h2>This is a h1 heading</h2>
//     <h3>This is a h1 heading</h3>
// </div>

// Q: Create a Functional Component of the same using JSX

// const Header = ()=>{
//     return (
//         <div className="title">
//             <h1>This is a h1 heading</h1>
//             <h2>This is a h2 heading</h2>
//             <h3>This is a h3 heading</h3>
//         </div>
//     )
// }

// - Pass attributes into the tag in JSX

// const Header = ()=>{

//     return (
//         <div className="title">
//             <h1 style={{color: 'red'}}>This is an h1 heading</h1>
//             <h2 style={{backgroundColor: 'green'}}>This is an h2 heading</h2>
//             <h3 style={{textAlign: 'center'}}>This is an h3 heading</h3>
//         </div>
//     )
// }

// Q:4 Composition of Component: Rendering a component inside another component

// const Component1 = ()=>{

//     return (
//             <p>This heading will be rendered inside another component</p>

//     )
// }

// const Header = ()=>{

//     return (
//         <div className="title">
//             <h1 style={{color: 'red'}}>This is an h1 heading</h1>
//             <h2 style={{backgroundColor: 'green'}}>This is an h2 heading</h2>
//             <Component1/>
//             <h3 style={{textAlign: 'center'}}>This is an h3 heading</h3>
//         </div>
//     )
// }

// `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

// const TitleComponent = () => {
//   return <h1 style={{ color: "red" }}>This is a Title</h1>;
// };

// const element = <h2 style={{ color: "orangered" }}>This is a React Element</h2>;

// const Header = () => {
//   return (
//     <div>
//       <h2 style={{ color: "red" }}> This is a title</h2>

//       {/* {TitleComponent} */}
//       {element}

//       <h2 className="someText">This is some text</h2>

//       {/*   <TitleComponent/>    */ }
//       <TitleComponent/>

//       <h3 style={{color: 'blue'}}>This is another h3 heading</h3>
//       {/*   <TitleComponent><TitleComponent/>    */ }

//       <TitleComponent></TitleComponent>
//     </div>
//   );
// };

// Assignment: Create a Header Component from scratch using Functional Component with JSX

// 1. Add a Logo on the Left
// 2.  Add a Search bar in the middle
// 3. Add a User Icon on the right
// 4. Add CSS to make it look nice

const Header = () => {
 
    return (
        <>
        <header className="header">

        <div className="left">
            <img src={logo}></img>
        </div>
        <div className="center">
            <input type="text" placeholder="Search Anything..."></input>
            <i className="fa fa-search"></i>
        </div>

        <div className="right">
            <img src={userIcon}></img>
        </div>
            
        </header>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
