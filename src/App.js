import React  from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./Navigation/RouterConfig";
import { ProvideAuth } from "./Navigation/Auth/ProvideAuth";

function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </ProvideAuth>
  );
}

export default App;
