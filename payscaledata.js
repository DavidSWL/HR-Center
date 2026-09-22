// Reference pay bands by division and role, used only to help fill in
// the offer/increase/promotion letter's rate field in docgen.html. This
// is never written to Firestore -- per the "no compensation data in the
// database" rule, it lives here in source instead, the same way the
// letter's rate field itself is printed and discarded, never saved.
// Update this file directly when pay bands change.
export const PAY_SCALE = [
  {
    division: 'Maintenance',
    roles: [
      { role: 'Gardener 1', entry: 17.00, senior: 18.00 },
      { role: 'Gardener 2', entry: 18.50, senior: 21.00 },
      { role: 'Gardener Lead', entry: 21.00, senior: 22.00 },
      { role: 'Foreman 1', entry: 22.00, senior: 24.00 },
      { role: 'Foreman 2', entry: 24.00, senior: 26.00 },
    ],
  },
  {
    division: 'Landscape',
    roles: [
      { role: 'Landscaper 1', entry: 17.00, senior: 18.50 },
      { role: 'Landscaper 2', entry: 19.00, senior: 21.00 },
      { role: 'Landscaper Lead', entry: 21.00, senior: 23.00 },
      { role: 'Foreman 1', entry: 24.00, senior: 27.00 },
      { role: 'Foreman 2', entry: 27.00, senior: 32.00 },
    ],
  },
  {
    division: 'Irrigation',
    roles: [
      { role: 'Trainee 1', entry: 22.00, senior: null },
      { role: 'Repairman 2', entry: 23.00, senior: 24.00 },
      { role: 'Technician 1', entry: 25.00, senior: 27.00 },
      { role: 'Technician 2', entry: 28.00, senior: 32.00 },
    ],
  },
  {
    division: 'Tree Care',
    roles: [
      { role: 'Groundsman 1', entry: 18.00, senior: 21.00 },
      { role: 'Groundsman 2', entry: 22.00, senior: 25.00 },
      { role: 'Pruner / Climber', entry: 25.00, senior: 29.00 },
      { role: 'Advance Climber', entry: 30.00, senior: 32.00 },
      { role: 'Aerial Lift Pruner', entry: 30.00, senior: 34.00 },
    ],
  },
];
