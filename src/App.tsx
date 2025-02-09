import React from 'react';
import {Route} from "react-router";
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";
import {Footer} from "./components/shared/footer";
import Header from "./components/home/Header";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css';

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
