# DivideJS

### What is this library for?

> This library was created in order not to load the main process with complex algorithmic tasks.
> This library will run tasks in another process.
> And you don't have to worry about which stream to use. You only need to specify the complexity of the algorithm

Example

```js
const algorithms = new Algorithms();
const divJs = new Divide(algorithms);

//run in main thread
const num = divJs.sum("789", "32", "main");
console.log(num);

//run in another thread
const num = divJs.sum("789", "32", "worker");
num.then((res) => console.log(res));
```
