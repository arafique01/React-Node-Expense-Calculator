// // import React from 'react';
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div  className="bg-secondary d-flex flex-column justify-content-center align-items-center text-center vh-100">
//         <h1>Login Success Page</h1>
//         <Link to='/login' className="btn btn-light my-5">Logout</Link>
//     </div>
//   )
// }

// export default Home


import React from 'react';
import { Link } from "react-router-dom";
import { Header } from './Header';
import { Balance } from './Balance';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';

import { GlobalProvider } from '../context/GlobalState';

import '../App.css';

const Home = () => {
  return (
    <div>
      <div className="bg-secondary d-flex justify-content-center align-items-center text-center vh-100">
        <div className="bg-white p-3 rounded" style={{ width: '95%' }}>

          <GlobalProvider>
            <Link to='/login' className="btn btn-light my-5">Logout</Link>
            <Header />
            <div className="container">
              <Balance />
              <AddTransaction />
              <TransactionList />

            </div>
          </GlobalProvider>
        </div>
      </div>
    </div>

  );
}

export default Home