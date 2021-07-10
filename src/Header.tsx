import React from 'react';

const Header = () => {
  return (
    <div className="wrapper">
      <ul>
        <li>
          <a href="#user">
            <button className="signbutton">Sign In</button>
          </a>
        </li>
        <li>
          <a href="#grid">
            <img
              className="grid"
              src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png"
              title="Google apps"
            />
          </a>
        </li>
        <li>
          <a href="#images">Images</a>
        </li>
        <li>
          <a href="#gmail">Gmail</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
