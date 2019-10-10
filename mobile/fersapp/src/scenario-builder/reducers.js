import {scenarioTemplate} from '../lib/scenario-template';
import types from '../../types';

const scenario = (state = scenarioTemplate, action) => {
  switch (action.type) {
    case types.UPDATE_NAME:
      return {
        ...state,
        name: action.name,
      };
    case types.UPDATE_HIGH_RISK:
      return {
        ...state,
        is_highrisk: action.isHighRisk,
      };
    case types.MILITARY_SERVICE_YEARS:
      return {
        ...state,
        military_years: parseInt(action.years),
      };
    case types.MILITARY_SERVICE_MONTHS:
      return {
        ...state,
        military_months: parseInt(action.months),
      };
    case types.MILITARY_SERVICE_DAYS:
      return {
        ...state,
        military_days: parseInt(action.days),
      };
    case types.ESTIMATED_RETIREMENT_SALARY:
      return {
        ...state,
        estimated_retirement_salary: parseInt(action.salary),
      };
    case types.ESTIMATED_RETIREMENT_HIGH:
      return {
        ...state,
        estimated_retirement_3yr_avg_high: parseInt(action.salary),
      };
    default:
      return state;
  }
};

export default scenario;
