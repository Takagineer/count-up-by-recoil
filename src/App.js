import React from "react";
import { RecoilRoot } from "recoil";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

export const App = () => {
  return (
    <>
      <RecoilRoot>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </RecoilRoot>
    </>
  );
};

export default App;
