import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/">Link1</a></div>
                    <div><a href="/set">Link2</a></div>
                </nav>
            </header>

        </div>
    );
};

Header.propTypes = {
    
};

export default Header;