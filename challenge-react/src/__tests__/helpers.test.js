import { summaryDonations } from '../helpers';

describe('helpers', function () {
  test('`summaryDonations` should calculate donations correctly', function () {
    expect(summaryDonations([100, 100, 100, 100])).toEqual(400);
  });
});
