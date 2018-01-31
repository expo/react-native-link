/**
 * A Link element for React Native
 *
 * Currently links to http:// URLs
 *
 */

import React from 'react';
import { TouchableHighlight, Linking } from 'react-native';

export default class Link extends React.Component {
  render() {
    return <TouchableHighlight onPress={this._linkPressed} {...this.props} />;
  }

  _linkPressed = () => {
    if (this.props.url) {
      Linking.openURL(this.props.url);
    } else if (this.props.to && this.props.to.uri) {
      const url = this.props.to.uri;
      Linking.openURL(url);
    } else {
      console.error('Invalid Link destination:', this.props.to);
    }
  };
}
