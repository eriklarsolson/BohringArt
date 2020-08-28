import React from 'react';
import './App.css';
import {Header} from "./components/shared/header";
import {Route} from "react-router";
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";
import {Footer} from "./components/shared/footer";

function App() {
  return (
      <>
          <BrowserRouter>
              <div className="App">
                  <Header />

                  <Route component={Routes} />

                  <Footer />
              </div>
          </BrowserRouter>
      </>
  );
}

export default App;
