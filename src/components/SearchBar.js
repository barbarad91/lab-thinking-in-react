import React from 'react';
import { Component } from 'react';
class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleInputChange(inputText) {
    this.setState(
      {
        search: inputText,
      },
      () => {
        this.props.searchHandler(this.state.search);
      }
    );
  }

  render() {
    return (
      <input
        type="text"
        onChange={(e) => this.handleInputChange(e.target.value)}
      ></input>
    );
  }
}
export default SearchBar;
