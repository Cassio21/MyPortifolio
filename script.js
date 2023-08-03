'use strict';
const openNav = () => {
  const x = document.getElementById('navigation');

  if (x.className === 'navigation') {
    x.className += ' menujs block-header--fixed';
    document.getElementById('threeline-icon').innerHTML = '&Cross;';
  } else {
    x.className = 'navigation';
    document.getElementById('threeline-icon').innerHTML = '&#9776;';
  }
};
