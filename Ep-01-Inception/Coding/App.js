

const heading = React.createElement (
    'h1',
    {id: 'heading'},
    'Hello World from React 🚀'
  );
  console.log (heading);
  const root = ReactDOM.createRoot (document.getElementById ('root'));
  // root.render(heading);
  
  // Create below structure using React
  
  /*
  
  <div id="parent">
      <div id="child1">
          <h1>I am H1 heading</h1>
          <h2>I am H2 heading</h2>
      </div>
      <div id="child2">
          <h1>I am H1 heading</h1>
          <h2>I am H2 heading</h2>
      </div>
  </div>
  */
  
  const parent = React.createElement ('div', {id: 'parent'}, [
    React.createElement ('div', {id: 'child1'}, [
      React.createElement ('h1', {}, 'I am an H1 heading'),
      React.createElement ('h2', {}, 'I am an H2 heading'),
    ]),
    React.createElement ('div', {id: 'child2'}, [
      React.createElement ('h1', {}, 'I am an H1 heading'),
      React.createElement ('h2', {}, 'I am an H2 heading'),
    ]),
  ]);
  
  root.render(parent);
  