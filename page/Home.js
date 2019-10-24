import React from 'react';

import Weather from '../component/Weather';

export default class Home extends React.Component {
  render() {return (<Weather city={"London,uk"}/>);}
};