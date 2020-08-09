import React from "react";
import { Switch, Route } from "react-router-dom";


export default function App() {
  return (
      <>    
            <Route path="About.js">
              <About />
            </Route>
      </>
  );
}
