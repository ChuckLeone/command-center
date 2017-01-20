import React from 'react';
import AppSwitcherBar from './AppSwitcher';
import SiteHeader from './SiteHeader';

class Container extends React.Component {

  render() {
    return (
      <div>
        <SiteHeader />
        <AppSwitcherBar props={this.props.appTitle} />
        <div>{this.props.children}</div>
      </div>
    );
  }
}


export default Container;
