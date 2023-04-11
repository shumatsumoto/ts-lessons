import React from "react";
import logo from "./logo.svg";
import "./App.css";

const name = "hello";
let aaa = "hello";

let array = ["あああ", 2, true];

interface NAME {
  first: string;
  last: string | null;
}

let nameobj: NAME = {
  first: "shu",
  last: null,
};

const func1 = (x: number, y: number): number => {
  return x + y;
};

type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  name: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "tokyo",
  name: "xxx",
  password: "xxxxx",
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
