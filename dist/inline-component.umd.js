(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global.InlineComponent = factory(global.React));
}(this, (function (React) { 'use strict';

React = React && 'default' in React ? React['default'] : React;

class InlineComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.initialState;
  }

  componentWillMount() {
    this.props.willMount(this);
  }

  componentDidMount() {
    this.props.didMount(this);
  }

  componentWillReceiveProps(nextProps) {
    this.props.willRecieveProps(nextProps, this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.props.shouldUpdate(nextProps, nextState, this);
  }

  componentWillUpdate(nextProps, nextState) {
    this.props.willUpdate(nextProps, nextState, this);
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.didUpdate(prevProps, prevState, this);
  }

  componentDidMount() {
    this.props.didMount(this);
  }

  render() {
    this.props.render(this.props, this.state, this.setState);
  }

  componentWillUnmount() {
    this.props.willUnmount(this);
  }

  componentDidCatch(error, info) {
    this.props.didCatch(error, info, this);
  }
}

return InlineComponent;

})));
