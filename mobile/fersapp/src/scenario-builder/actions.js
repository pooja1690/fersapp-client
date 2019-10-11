import types from '../../types';

export const updateScenarioName = name => ({
  type: types.UPDATE_NAME,
  name,
});

export const updateDob = dob => ({
  type: types.UPDATE_DOB,
  dob,
});

export const updateServiceDate = serviceDate => ({
  type: types.UPDATE_SERVICE_DATE,
  serviceDate,
});

export const updateTentativeRetirementDate = TentativeRetirementDate => ({
  type: types.UPDATE_TENTATIVE_RETIREMENT_DATE,
  TentativeRetirementDate,
});

export const updateHighRisk = isHighRisk => ({
  type: types.UPDATE_HIGH_RISK,
  isHighRisk,
});

export const updateMilitaryServiceYears = years => ({
  type: types.UPDATE_MILITARY_SERVICE_YEARS,
  years,
});

export const updateMilitaryServiceMonths = months => ({
  type: types.UPDATE_MILITARY_SERVICE_MONTHS,
  months,
});

export const updateMilitaryServiceDays = days => ({
  type: types.UPDATE_MILITARY_SERVICE_DAYS,
  days,
});

export const updateEstimatedRetirementHigh = salary => ({
  type: types.UPDATE_ESTIMATED_RETIREMENT_HIGH,
  salary,
});

export const updateEstimatedRetirementSalary = salary => ({
  type: types.UPDATE_ESTIMATED_RETIREMENT_SALARY,
  salary,
});

export const updateSocialSecBenefit = ssb => ({
  type: types.UPDATE_SSB,
  ssb,
});

export const updateTspDisbursement = tsp => ({
  type: types.UPDATE_MONTHLY_TSP_DISBURSEMENT,
  tsp,
});

export const updateAnnualUnusedLeave = unusedLeave => ({
  type: types.UPDATE_ANNUAL_UNUSED_LEAVE,
  unusedLeave,
});

export const updateAnnualSickUnusedLeave = sickUnusedLeave => ({
  type: types.UPDATE_ANNUAL_SICK_UNUSED_LEAVE,
  sickUnusedLeave,
});

export const updateSurvivorBenefitDeductions = sbDeduction => ({
  type: types.UPDATE_SURVIVOR_BENEFIT_DEDUCTION,
  sbDeduction,
});

export const updateSurvivorBenefitOption = sbOption => ({
  type: types.UPDATE_SURVIVOR_BENEFIT_OPTION,
  sbOption,
});