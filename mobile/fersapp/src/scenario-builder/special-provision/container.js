import React, {Component} from 'react';
import {SpecialProvisionTemplate} from './template';
import {connect} from 'react-redux';
import {updateHighRisk} from '../actions';

class SpecialProvisionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionSelected: this.props.scenario.is_highrisk,
    };
  }

  static navigationOptions = {
    title: 'Step 3 of 10',
  };

  optionChanged = key => {
    this.setState({
      optionSelected: key,
    });

    this.props.updateHighRisk(key);
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <SpecialProvisionTemplate
        updateHighRisk={e => this.props.updateHighRisk(e)}
        isHighRisk={this.props.scenario.is_highrisk}
        options={options}
        optionSelected={this.state.optionSelected}
        optionChanged={key => this.optionChanged(key)}
        onComplete={() => navigate('MilitaryService')}
      />
    );
  }
}

const options = [
  {
    key: true,
    value: 'Yes, I am covered',
  },
  {
    key: false,
    value: 'No, I am not',
  },
];

const mapStateToProps = state => {
  return {
    scenario: state.scenario,
  };
};

const mapDispatchToProps = {
  updateHighRisk
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpecialProvisionContainer);
