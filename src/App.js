import React from "react";
import "./styles.css";
import styled from "styled-components";

import PhoneMock from "./components/PhoneMock";

const HEIGHT = 812;
const WIDTH = 300;

export default function App() {
  return (
    <div className="App">
      <PhoneMock HEIGHT={HEIGHT} WIDTH={WIDTH}>
        <h1>THE CHILD</h1>
      </PhoneMock>
    </div>
  );
}
