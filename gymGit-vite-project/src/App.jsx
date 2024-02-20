import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Footer from './fragments/Footer';
import NavBar from './fragments/Navbar';
import DaysTab from './pages/DaysTab';
import { Link } from 'react-router-dom';



export default class App extends Component {
  render() {
    console.log('App', this.props);
    return (
      <>
        <NavBar />
        <DaysTab />
        <Link to="/forkpage" className="btn btn-outline-primary">
          Fork
        </Link>
        <Footer />
      </>
    );
  }
}




