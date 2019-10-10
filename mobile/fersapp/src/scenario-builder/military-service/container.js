import React, {Component} from 'react';
import {MilitaryServiceTemplate} from './template';
import {connect} from 'react-redux';
import {
  updateMilitaryServiceYears,
  updateMilitaryServiceMonths,
  updateMilitaryServiceDays,
} from '../actions';

class MilitaryServiceContainer extends Component {
  static navigationOptions = {
    title: 'Step 4 of 10',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <MilitaryServiceTemplate
        updateMilitaryServiceYears={e =>
          this.props.updateMilitaryServiceYears(e)
        }
        updateMilitaryServiceMonths={e =>
          this.props.updateMilitaryServiceMonths(e)
        }
        updateMilitaryServiceDays={e => this.props.updateMilitaryServiceDays(e)}
        military_years={this.props.scenario.military_years}
        military_months={this.props.scenario.military_months}
        military_days={this.props.scenario.military_days}
        onComplete={() => navigate('SalaryInfo')}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    scenario: state.scenario,
  };
};

const mapDispatchToProps = {
  updateMilitaryServiceYears,
  updateMilitaryServiceMonths,
  updateMilitaryServiceDays,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MilitaryServiceContainer);
