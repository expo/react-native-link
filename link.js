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
    if (this.props.source && this.props.source.uri) {
      var url = this.props.source.uri;
      URLHandler.openURL(url);
    } else {
      console.error("Invalid Link source:", this.props.source);
    }
  },

});

module.exports = Link;
