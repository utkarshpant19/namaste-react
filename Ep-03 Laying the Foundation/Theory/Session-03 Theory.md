# CHAPTER-03: Laying the Foundation


## What is `JSX` ?

- `JSX` stands for `Javascript XML` allows us to write HTML elements in Javascript without having to write `createElement()` or `appendChild()` methods. JSX converts HTML tags into React Elements.

### Example - `JSX`

```
const heaading = (<h1>Hello World</h1>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

```
### Example - `Without JSX`

```
const heading = React.createElement('h1', {}, 'Heading without JSX`);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
```

### Q: Superpowers of `JSX`.

- Using JSX, we can write markup syntax inside javascript providing us a superpower of writing markup(HTML Like syntax) and logic in the same JSX file.

```
function greeting(user){

    return <h1> Hello {user} </h1>
}

```

- ### Q: Role of `type` attribute in `script` tag? What options can I use there?

- The `type` attribute specifies the type of the  `script`. It identifies the content inside `<script></script>`

Type attribute can be of following types
- `text/javascript`: (Default value) of type in `<script></script>` tags.

```
<script type="text/javascript" src="App.js"></script>
```
- `text/ecmascript`: This value indicates that script is following `ECMAScript` standards.
- `module`: This indicates browser that script is a module which can be exported or import other modules or files.
- `text/babel`: Script is babel type and requires babel to `transpile` it.
- `text/typescript`: As the name suggest the `script` is written in `TypeScript`.

### `<TitleComponent>`, `<TitleComponent/>` and `<TitleComponent></TitleComponent>` in `JSX`

- `<TitleComponent>`:  The {} can embed a javascript expression or a variable inside it. This value describes TitleComponent 
                        as a javascript varible or expression.

- `<TitleComponent/>`: This value represents a `Component` that is basically `returning Some JSX value`. In simple terms, 
TitleComponent is a function which returns some `JSX`. A component is written inside `{</>}`

`<TitleComponent></TitleComponent>`: `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when < TitleComponent /> has no child components.

```
<TitleComponent>
    <FirstChildComponent/>
    <SecondChildComponent/>
</TitleComponent>
```
