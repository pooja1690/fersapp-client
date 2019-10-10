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
  type: types.MILITARY_SERVICE_YEARS,
  years,
});

export const updateMilitaryServiceMonths = months => ({
  type: types.MILITARY_SERVICE_MONTHS,
  months,
});

export const updateMilitaryServiceDays = days => ({
  type: types.MILITARY_SERVICE_DAYS,
  days,
});

export const updateEstimatedRetirementHigh = salary => ({
  type: types.ESTIMATED_RETIREMENT_HIGH,
  salary,
});

export const updateEstimatedRetirementSalary = salary => ({
  type: types.ESTIMATED_RETIREMENT_SALARY,
  salary,
});