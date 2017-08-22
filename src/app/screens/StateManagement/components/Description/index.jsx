import React, { Component } from 'react';
import Section from 'components/Section';
import './index.scss';

export default class Description extends Component {
  render() {
    return (
      <Section>
        <h4 className='hasLine'><span className='line' />Description</h4>
        <br />
        <p>
          This boilerplate uses <b>MobX</b> for app state management. In the following section,
          a basic to-do list app in which all components donot communicate with each other
          for updating their state, instead they communicate with a common <b>store </b>
          handled by <b>MobX</b> and rerender if any change happens in the store
          values they are linked to.
        </p>
      </Section>
    );
  }
}
