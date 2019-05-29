import Link from 'next/link';

let BaseLink;

export default BaseLink = (props) => (
  <Link
    as={props.as}
    prefetch
    href={props.url}
  ><a>{props.name}</a>
  </Link>
);
