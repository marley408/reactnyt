import React from 'react';
// import {
//   Form,
//   FormGroup,
//   FormControl,
//   Button
// } from 'react-bootstrap'

// const SearchForm = (props) => (
//   <Form />
//     <div className="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div className="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
//   </div>
//   </Form>
// )

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        topic: '',
        startYear:'',
        endYear:'',
      },
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // this.setState({topic: event.target.value});
    const name = e.target.name;
    const val = e.target.value;

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [name]: val
      }
    }));
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
    
    function buildQueryURL() {
      // queryURL is the url we'll use to query the API
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    
      // add the api key parameter (the one we received when we registered)
      queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    
      // grab text the user typed into the search input, add as parameter to url
      var searchTerm = $("#search-term").val().trim();
      queryURL += "&q=" + searchTerm;
    
      // if the user provides a startYear, include it in the queryURL
      var startYear = $("#start-year").val().trim();
    
      if (parseInt(startYear)) {
        queryURL += "&begin_date=" + startYear + "0101";
      }
    
      // if the user provides an endYear, include it in the queryURL
      var endYear = $("#end-year").val().trim();
    
      if (parseInt(endYear)) {
        queryURL += "&end_date=" + endYear + "0101";
      }
    
      // Logging the URL so we have access to it for troubleshooting
      console.log("---------------\nURL: " + queryURL + "\n---------------");
    
      return queryURL;
    }

      // build the query URL for the ajax request to the NYT API
    var queryURL = buildQueryURL();

    // make the AJAX request to the API - GETs the JSON data at the queryURL.
    // the data then gets passed as an argument to the updatePage function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(updatePage);
  
  }

  render() {
    return (
      <div className="row-fluid mx-auto">
        <div className="mx-auto table">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Search Parameters</h3>
            </div>
            <div className='panel-body'>
              <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <label >Topic</label>
                  <input name='topic' id='topic' value={this.state.form.topic} type='text' className='form-control' placeholder={this.state.value} onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                  <label htmlFor="start-year">Start Year </label>
                  <input name='startYear' value={this.state.form.startYear} type="text" className="form-control" id="start-year" onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                  <label htmlFor="start-year">End Year </label>
                  <input name='endYear' value={this.state.form.endYear} type="text" className="form-control" id="end-year" onChange={this.handleChange}/>
                </div>
                <button type='submit' className='btn btn-primary'>Submit </button>
              </form>
            </div>
          </div>
        </div>
        {/* <Results data={this.state.results} /> */}
      </div>
    );
  }
}

export default SearchForm