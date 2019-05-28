import Link from 'next/link';

const LinkItem = (props) => (
  <Link
    as={props.as}
    href={props.url}
  ><a>{props.name}</a>
  </Link>
);

let MainNav;

export default MainNav = () => (
  <ul>
    <li>
      <LinkItem
        as={'/h'}
        url={'/Home'}
        name={'home'}
      />
    </li>
    <li>
      <LinkItem
        as={'/abm'}
        url={'/AboutMe'}
        name={'aboutMe'}
      />
    </li>
  </ul>
);