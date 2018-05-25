import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class Cheeselist extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }


  render(){
    const cheeses = this.props.cheeses.map((cheese, index) => {
      return (
        <li key={index}>
          {cheese}
        </li>
      );
    });

    return (
      <ul>
        {cheeses}
      </ul>
    );
  } 
}
const mapStateToProps = (state) => {
  return {cheeses : state.cheesesReducer.cheeses};
};

export default connect(mapStateToProps)(Cheeselist);