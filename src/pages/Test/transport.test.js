import {getTestData} from './transport';

describe('Test - transport', () => {
  it('return getTestData', () => {
    getTestData({config: {headers: {}, urls: {api: {test: {}}}}}).then((data) =>
      expect(data).toEqual({}),
    );
  });
});
