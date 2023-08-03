# Ep-04 Talk is Cheap, Show me the Code

## Q: What is <React.Fragment></React.Fragment> and <></>?

`React.Fragment` is a feature that allows you to return multiple elements from React component by allowing you
to group a list of children without adding extra nodes to the DOM. The `<></>` is a shorthand property for `React.Fragment`,
the only difference is we can't pass `key` attribute to `<></>`

```
return (
       <React.Fragment>
           <Header />
           <Navigation />
           <Main />
           <Footer />
       </React.Fragment>
   );

return (
       <>
           <Header />
           <Navigation />
           <Main />
           <Footer />
       </>
   );
```

## Q: What is Reconciliation in React?

- `Reconciliation` is the process through which React `updates browser DOM` and makes React fast. React uses `Diffing algorithm` by which React finds the `difference` between `Real DOM` and `copy of DOM(Virtual DOM)` when there is a update of `components`. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates new Virtual DOM and compares it with previous Virtual DOM. This comparison is done by `Diffing Algorithm`. React compares the Virtual DOM with Real DOM, it finds out the changed nodes and updates only the changed Nodes in Real DOM leaving the rest of the nodes as it is. This process is called `Reconciliation`.

## Q: What is React Fiber?

React Fiber is a concept that ReactJS uses to render a system faster, smarter. The Fiber reconciler which became the default
Reconciler in React 16 and above is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:

- `Pause, resume, and restart rendering` work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance

## Q: Why do we need keys in React?

A `key` is a special attribute you need to include when creating `lists of elements` in React. Keys are used in React to identify which items in the list are changed, updated, or deleted

```
<li key={1}>A</li>
<li key={2}>B</li>
<li key={3}>C</li>
```
## Q: Can we use index as keys in React?

Yes we can use indices as the keys but is not considered a good practice, since if order of the elements changed, their indices would change and they will not be uniquely identified and defeats the purpose of having key in elements of list.

## Q: What is `props` in React? Ways to.

`Props are arguments passed into React components`. props are used in React to pass data from one component to another (from a parent component to a child component(s))

```
const App = ()=>{

    return (
        <div className="App">
        <Name firstName="Utkarsh" surname="Pant"/>
        </div>
    )
}
```

## Q: Difference between `Virtual DOM` and `Real DOM`?

DOM is an interface that allows scripts to update the content, style, and structure of the document.

- `Virtual DOM`: 
    - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a `copy of the DOM,` that can be updated without affecting the actual DOM.
    - `Reconciliation` is the process to compare and keep in sync two files (Real DOM and Virtual DOM). `Diffing algorithm` is a technique of reconciliation which is used by React.

- `Real DOM`
    - The `DOM` represents the web page often called a `document` with a logical `tree` and each branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

    |   `Real DOM`    |   `Virtual DOM` |
    |-------------|-----------------|
    | DOM manipulation is very expensive  | DOM manipulation is very easy  | 
    | There is too much memory wastage  | No memory wastage  |
    | It updates Slow | It updates fast |
    | It `can` directly update HTML | It `can’t` update HTML directly  |
    |  Creates a new DOM if the element updates. | Update the JSX if the element update |
    | It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
    | It represents the UI of your application | It is `only a virtual representation of the DOM` |