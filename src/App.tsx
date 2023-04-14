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
};

type LOGIN = {
  name: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "tokyo",
  name: "xxx",
  password: "xxxxx",
};

let value: boolean | number;
value = 222;

let arrayUnion: (number | string)[];
arrayUnion = [0, 2, "aaa"];

let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";

let memory: 256 | 333;
memory = 256;

let msg: string = "hi";
let msg2: typeof msg;
msg2 = "hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal;
newAnimal = { cat: "hello" };

type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

enum OS {
  windows,
  mac,
  linux,
}

interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.mac,
};

const PC2: PC = {
  id: 2,
  OSType: OS.linux,
};

const comp1 = "test";
let comp2: string = comp1;

let comp3: string = "test";

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};

interface GEN<T extends string | number> {
  item: T;
}
const gen0: GEN<string> = {
  item: "hello",
};
const gen1: GEN<number> = {
  item: 222,
};

function funcGen<T>(props: T) {
  return {
    item: props,
  };
}

const genFunc = funcGen<string>("222");

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
