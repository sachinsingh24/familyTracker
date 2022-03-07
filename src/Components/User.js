/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
  const [Head, setHead] = useState({
    username: {},
    password: {},
  });
  const [Member, setMember] = useState({
    username: {},
    password: {},
  });
  console.log(Head.username);
  console.log(Member.username);

  useEffect(() => {
    axios
      .get('https://familytracker-24.herokuapp.com/headsignup/')
      .then((res) => {
        setHead((prev) => {
          return {
            ...prev,
            username: res.data.map((username) => username.username),
            password: res.data.map((password) => password.password),
          };
        });
      });
    axios
      .get('https://familytracker-24.herokuapp.com/membersignup/')
      .then((res) => {
        setMember((prev) => {
          return {
            ...prev,
            username: res.data.map((username) => username.username),
            password: res.data.map((password) => password.password),
          };
        });
      });
  }, []);

  return (
    <div>
      <h1>family Tracker</h1>
      <button>
        <Link to='/login' state={{ Login: Head }} className='nav-link'>
          family Head
        </Link>
      </button>
      <button>
        <Link to='/login' state={{ Login: Member }} className='nav-link'>
          family Member
        </Link>
      </button>
    </div>
  );
};

export default User;
