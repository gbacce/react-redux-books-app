import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group=item">
          {book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}

//** This takes the action creator and allows it to be called inside of the container (thus binding it) ** //
// Anything returned from this function will end up as props on the BookList container. 

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  // The dispatch function takes all of the actions and receivers them, like a funnel, then spits them out to all of the reducers.

  return bindActionCreators({ selectBook: selectBook }, dispatch)
  //   In this case, the selectBook that is the property of the object is the actual action creator that is imported at the top of the page.
  //   The first selectBook becomes a prop. So now, the function can be called using this.props.selectBook
}


// Promote BookList from a component to a container. It needs to know about this new dispatch method, selectBook. Make it availabe as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);