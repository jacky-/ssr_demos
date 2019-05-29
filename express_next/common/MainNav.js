import Link from 'next/link';

import BaseLink from './BaseLink.js';

let MainNav;

export default MainNav = () => (
  <ul>
    <li>
      <BaseLink
        url={'/Home'}
        name={'home'}
      />
    </li>
    <li>
      <BaseLink
        as={'/abm'}
        url={'/AboutMe'}
        name={'aboutMe'}
      />
    </li>
  </ul>
);
