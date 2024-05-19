import React from 'react';
import Header from './Header';
import {navLinks} from '../../assets/data/navLinks';
import Footer from './Footer'

const PublicLayout = ({children}) => {

    return (
        <div className="container">
          <Header links = {navLinks} />
              <main>
                  {children}
              </main>
          <Footer />

        </div>
    );
}

export default PublicLayout;