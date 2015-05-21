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
} = React;

var URLHandler = require('react-native-url-handler');

var Link = React.createClass({
  render() {
    return (
      <TouchableHighlight onPress={this._linkPressed} {...this.props} />
    );
  },

  _linkPressed() {
    if (this.props.url) {
      URLHandler.openURL(this.props.url);
    } else if (this.props.to && this.props.to.uri) {
      var url = this.props.to.uri;
      URLHandler.openURL(url);
    } else {
      console.error("Invalid Link destination:", this.props.to);
    }
  },

});

module.exports = Link;
