/**
 * A Link element for React Native
 *
 * Currently links to http:// URLs
 *
 */
var React = require('react-native');

var {
  AppRegistry,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Linking,
} = React;

var Link = React.createClass({
  render() {
    return (
      <TouchableHighlight onPress={this._linkPressed} {...this.props} />
    );
  },

  _linkPressed() {
    if (this.props.url) {
      Linking.openURL(this.props.url);
    } else if (this.props.to && this.props.to.uri) {
      var url = this.props.to.uri;
      Linking.openURL(url);
    } else {
      console.error("Invalid Link destination:", this.props.to);
    }
  },

});

module.exports = Link;
