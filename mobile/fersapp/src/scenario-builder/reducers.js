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
    case types.UPDATE_MILITARY_SERVICE_YEARS:
      return {
        ...state,
        military_years: action.years ? parseInt(action.years) : 0,
      };
    case types.UPDATE_MILITARY_SERVICE_MONTHS:
      return {
        ...state,
        military_months: action.months ? parseInt(action.months) : 0,
      };
    case types.UPDATE_MILITARY_SERVICE_DAYS:
      return {
        ...state,
        military_days: action.days ? parseInt(action.days) : 0,
      };
    case types.UPDATE_ESTIMATED_RETIREMENT_SALARY:
      return {
        ...state,
        estimated_retirement_salary: action.salary
          ? parseInt(action.salary)
          : 0,
      };
    case types.UPDATE_ESTIMATED_RETIREMENT_HIGH:
      return {
        ...state,
        estimated_retirement_3yr_avg_high: action.salary
          ? parseInt(action.salary)
          : 0,
      };
    case types.UPDATE_SSB:
      return {
        ...state,
        estimated_monthly_ssb: action.ssb ? parseInt(action.ssb) : 0,
      };
    case types.UPDATE_MONTHLY_TSP_DISBURSEMENT:
      return {
        ...state,
        monthly_tsp_disbursement: action.tsp ? parseInt(action.tsp) : 0,
      };
    case types.UPDATE_ANNUAL_UNUSED_LEAVE:
      return {
        ...state,
        unused_annual_leave_hours: action.unusedLeave ? parseInt(action.unusedLeave) : 0,
      };
    case types.UPDATE_ANNUAL_SICK_UNUSED_LEAVE:
      console.log(action)
      return {
        ...state,
        unused_sick_leave_hours: action.sickUnusedLeave ? parseInt(action.sickUnusedLeave) : 0,
      };
    case types.UPDATE_SURVIVOR_BENEFIT_DEDUCTION:
      return {
        ...state,
        survivor_benefit_deductions: action.sbDeduction ? parseInt(action.sbDeduction) : 0,
      };
    case types.UPDATE_SURVIVOR_BENEFIT_OPTION:
      return {
        ...state,
        survivor_benefit_option: action.sbOption ? action.sbOption : 'none',
      };
    default:
      return state;
  }
};

export default scenario;
