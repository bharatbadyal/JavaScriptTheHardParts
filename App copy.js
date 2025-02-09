// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World for React!"
// );
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I'm an H1 tag inside child1 elements"),
//     React.createElement("h2", {}, "I'm an H2 tag inside child1 elements"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "This is h1 from child2"),
//     React.createElement("h2", {}, "This is h2 from child2"),
//   ]),
// ]);
// console.log(heading);
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// basic example of promise

const demoPromise = new Promise(function executor(resolve, reject) {
  resolve("Hello");
});

demoPromise.then(function () {
  console.log(demoPromise);
});
