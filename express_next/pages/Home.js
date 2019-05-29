import MainNav from '../common/MainNav.js';
import fetch from 'isomorphic-unfetch';
import {
	getTest
} from '../conf/ApiConf.json';

import BaseLink from '../common/BaseLink.js';

import dynamic from 'next/dynamic'

const DynamicComponentWithCustomLoading = dynamic(
  import('../components/hello2'),
  {
    loading: () => <p>...</p>
  }
)
const Index = (props) => (
  <div>
    <MainNav />
    <ul>
      <DynamicComponentWithCustomLoading />
      {
        props.shows.map(({ show }) => (
          <li
            key={show.id}
          >
            <BaseLink
              url={'javascript:;'}
              name={show.name}
            />
          </li>
        ))
      }
    </ul>
  </div>
)

Index.getInitialProps = async function(props) {
  console.log('getInitialProps', props);
  const res = await fetch(getTest);
  const shows = await res.json();
  return {
    shows
  };
}

export default Index;
