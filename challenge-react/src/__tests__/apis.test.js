import { getCharities, getPayments } from '../apis/';

test('getCharities', () => {
  return getCharities().then((resp) => {
    expect(resp).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          name: 'Baan Kru Noi',
          image: 'baan-kru-noi.jpg',
          currency: 'THB',
        }),
      ])
    );
  });
});

test('getPayments', () => {
  return getPayments().then((resp) => {
    expect(resp).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          charitiesId: 2,
          amount: 10,
          currency: 'THB',
          id: 1,
        }),
      ])
    );
  });
});
