import React from "react";
import ReactDOM from "react-dom/client";

// React Syntax
// React.createElement => React Element(JS Object) => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀🚀"
);
console.log("React heading ", heading);
// By Babel
// JSX =>React.createElement ==> React Element(JS object) => HTMLElement
const jsxHeading = <h1 id="heading">Namaste React</h1>;
console.log("JSX Heading ", jsxHeading);



// React Component : A JS function which returns JSX or React Element

const heading2 = (
    <h1 id="heading">Namaste React from JSX 🚀🚀</h1>
)

// Convert React Element to Functional Component

const Heading2 = ()=> <h1 id="heading">Namaste React from Functional Component 🚀🚀</h1>

const Title = () => {
  return <h1 id="title">Namaste React</h1>;
};

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title /> {/* Component Composition: Rendering a React Component inside another react component */}
      <h1 className="heading">This is a React Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading); // jsxHeading is nothing but ReactElement

// Rendering a React Component in Root

root.render(<HeadingComponent></HeadingComponent>)
