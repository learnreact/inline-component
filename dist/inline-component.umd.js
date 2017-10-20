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
    return this.props.willMount && this.props.willMount(this);
  }

  componentDidMount() {
    return this.props.didMount && this.props.didMount(this);
  }

  componentWillReceiveProps(nextProps) {
    return this.props.willReceiveProps && this.props.willRecieveProps(nextProps, this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.shouldUpdate && this.props.shouldUpdate(nextProps, nextState, this);
  }

  componentWillUpdate(nextProps, nextState) {
    return this.props.willUpdate && this.props.willUpdate(nextProps, nextState, this);
  }

  componentDidUpdate(prevProps, prevState) {
    return this.props.didUpdate && this.props.didUpdate(prevProps, prevState, this);
  }

  componentDidMount() {
    return this.props.didMount && this.props.didMount(this);
  }

  render() {
    return this.props.render(this.props, this.state, this.setState);
  }

  componentWillUnmount() {
    return thas.props.willUnmount && this.props.willUnmount(this);
  }

  componentDidCatch(error, info) {
    return this.props.didCatch && this.props.didCatch(error, info, this);
  }
}

return InlineComponent;

})));
