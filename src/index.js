import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Stories from "./story-assembler";
const { accounts: accountsFlag, cards: cardsFlag } = Stories;

let Accounts = accountsFlag && lazy(() => import("./StoryletAccounts"));
let Cards = cardsFlag && lazy(() => import("./StoryletCards"));

function App() {
  return (
    <div className="App">
      {accountsFlag && (
        <Suspense fallback={<div>Loading...</div>}>
          <Accounts />
        </Suspense>
      )}
      {cardsFlag && (
        <Suspense fallback={<div>Loading...</div>}>
          <Cards />
        </Suspense>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
