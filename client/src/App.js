import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import BSJumbotron from './components/Jumbotron/jumbotron'
import { Jumbotron } from "react-bootstrap";
import SearchForm from "./components/searchForm";
import Results from "./components/results";
import SavedArticles from "./components/savedArticles";


class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <Jumbotron>
          <h1>New York Times</h1>
          <p>
            Search for and save articles!
          </p>       
        </Jumbotron>
        <SearchForm/>
        <Results/>
        <SavedArticles/>
      </div>
      );
    }
  }



  const App = () => (
    <BrowserRouter>
      <div className="container text-center">
        <Jumbotron />
        <SearchForm />
        <Route exact path="/results" component={Results} />
        <Route exact path="/saved" component={SavedArticles} />
        {/* <Route component={NoMatch} /> */}
      </div>
    </BrowserRouter>
  );
export default App;
