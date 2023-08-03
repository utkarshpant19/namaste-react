# Chapter: 05 LET'S GET HOOKED

## What is the difference between Named export, Default export, and * as export?


## Default Import
```
const HeaderComponent = ()=>{

    return (
        <>
            Some JSX code
        </>
    )
}


export default HeaderComponent;



Importing Default Export:

import HeaderComponent from 'filePath';

```


## Named Import

```
export const HeaderComponent = ()=>{

    return (
        <>
            Some JSX code 
        </>
    )
}

import {HeaderComponent} from 'file_path';
```



## * as import

```
export const MyComponent1 = ()=>{

    return (
        <>

        </>
    )
}
export const MyComponent2 = ()=>{

    return (
        <>

        </>
    )
}
export const MyComponent3 = ()=>{

    return (
        <>

        </>
    )
}

Importing * as Export:

import * as MyComponent from 'file_path';

```
Now use it in JSX

```
<MyComponent.MyComponent1/>
<MyComponent.MyComponent2/>
<MyComponent.MyComponent3/>
```

## Can we use both named and Default Export together

```
export const MyComponent = ()=>{}

const MyComponent2 = ()=>{}

export default MyComponent;


import MyComponent , {MyComponent2} from 'MyComponent`;

```

## Q:5 What is the importance of `config.js` file?

A: `config.js` files are essentially editable text files that contain information required for the successful operation of a program. The files are structured in a particular way, formatted to be user configurable. Most of the computer programs we use: whether office suites, web browsers, even video games are configured via menu interfaces. Configuration files are very simple in structure. For instance, if you were to write an application, and the only thing it ever needed to know was its user's preferred name, then its one and only config file could contain exactly one word: the name of the user. For example:

```
NAME='Chetan'
SURNAME='Nada'
```

## Q: What are `React Hooks?`
React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.
Hooks can be stateful and can manage side-effects. Hooks allow you to reuse stateful logic without changing your component hierarchy.

React provides a bunch of standard in-built hooks:
 - `useState`: To manage `states`. `Returns a stateful value` and an `updater function` to update it.
 - `useEffect`: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
 - `useContext`: To return the current value for a context.
 - `useReducer`: A useState alternative to help with complex state management.
 - `useCallback`: It returns a `memorized version of a callback` to help a child component not re-render unnecessarily.
 - `useMemo`: It returns a `memoized value` that helps in `performance optimizations.`
 - `useRef`: It returns a `ref` object with a `current property`. The ref object is mutable. It is mainly used to access a child component imperatively.
 - `useLayoutEffect`: It fires at the end of all `DOM mutations`. It's best to use `useEffect` as much as possible over this one as the `useLayoutEffect fires synchronously`.
 - `useDebugValue`: Helps to display a label in React DevTools for custom hooks.

 ## Q: Why do we need useState Hook?

 A: `useState` hook is used to `maintain the state` in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component. The useState hook is a special function that takes the `initial state` as an argument and `returns an array` of two entries.

 Syntax to use useState
```
import React, { useState } from "react";

 const [state, setState] = useState(initialstate);
```