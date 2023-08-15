
# Theory Assignment 

### Q: What is `Microservice` ?
- Microservice is an architectural approach to Software development where Software is composed of small, independent services like database, server, UI of the application, that communicate over well defined `APIs`.

Benefits of Microservices

- Flexible Scaling
- Easy Deployment
- Technology freedom
- Reusability

### Q: What is `Monolithic Architecture` ?
 A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. We don't divide software into small, well-defined modules, we use every services like, database, server or a UI of the application, in one Application file.

 ### Q: What is the difference between `Monolith and Microservice`?

 With Monolithic architectures, all processes are `tightly coupled` and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. 

 With Microservice architecture, application is built as bunch of independent components that run each application process as a Service. These services communication via a well-defined interface through APIs. Each service performs a single function. Because they are independently run, each service can be deployed, scaled to meet the demand for specific functions of the application.

 ![Monolith and Microservices](../Code/Images/monolith-microservices.png)

 ### Why do we need `useEffect()` hook ?

`useEffect hook` is a javascript function provided by `React`. useEffect Hook allows you to `eliminate side effects` in your components. Some examples of Side effects are: `fetching API data`, `directly updating DOM`, `setting up subscriptions or timers`. useEffect accepts two arguments: 1) callback function 2) dependency array. The second argument is optional.

```
useEffect(()=> {}, [])
```

`()=> {}`, is a cb function and `[]` is an empty dependency array. If anything we pass inside the array, say application state, it triggers the callback function and changes the state of the application.
```
useState(()=>{
setCurrentState(true);
}, [currentState])
```

- If we do not pass empty dependency array, useEffect will be called ,everytime the UI is rendered.

```
useState(()=> {})
```

### Q: What is the difference between `JS expression` and `JS statement`?

- JS Expression returns a value;
```
console.log('Hello'); // logs hello
isTrue ? true: false;
```
- JS statement doesn't return a value

```
let a = 5; // doesn't return anything
```

JS Expression in jsx

```
{JS expression}
```

```
{(JS Statement)}
```

### Q: What is `Conditional Rendering`? explain with a code example.

```
(
    if(isLoggedIn){
        return <LayoutComponent/>
    }
    else{
        return <LoginComponent/>
    }
)

```

### Q: What is `CORS` ?

- Cross Origin Resource Sharing is a HTTP header based mechanism, that allows a server to indicate any origins(domain, scheme or port) other than its own from where a browser should permit loading resources. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow cross-origin request.

### Q: What is `async and await`?
- `Async and Await` allows you to write Promise based code as if it is synchronous and it checks we are not breaking Execution thread.  It operates asynchronously via the event loop. `Async` functions will always return a `promise`. It makes sure that a Promise is returned and if it is not returned, then JS makes sure to wrap it inside a Promise object which is resolved with its value. `Await` function is used to wait for the promise, it could only be used within `async` block. It only makes the async block wait.

```
async function getRestaurants(){

    const data = await fetch(SWIGGY_API_URL);

    const json = await data.json(); // We get the Swiggy API data in JSON format
    console.log(json)
}

```
### Q: What is the use of `const json = await data.json(); in getRestaurants()`?

The `data` object returned by await fetch() is a generic placeholder for multiple data formats. We can extract the JSON object from fetch response using `await data.json()`. data.json() is a method on the data object that lets you extract JSON object from `data` or `response`. `data.json()` returns a `promise` `resolved to a JSON object`.


