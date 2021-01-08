import React from 'react';
import UsersContainer from './components/UsersContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


const App = () => {

  return (
    <section>
      <Header />
      <UsersContainer/>
      <Footer />
    </section>
  )
}

export default App;
