import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <div className="navlinks">
        {/* If no user is logged in, show these links */}
        <Link className="navLink" to="/home">
        Home
        </Link>
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Your Room
            </Link>
            <Link className="navLink" to="/info">
              Your Info
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}


        <Link className="navLink" to="/about">
          About Us
        </Link>
      </div>
    </div>
  );
}

export default Nav;
