'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

module.exports = InlineComponent;
