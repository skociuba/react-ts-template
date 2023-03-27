import {getLinkWithParameter, encodeQueryData} from '.';

describe('getLinkWithParameter()', () => {
  const parameter = 'index2.html';

  describe('customer channel', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = {
        ...originalEnv,
        REACT_APP_CHANNEL_TYPE: 'customer',
        REACT_APP_URLS_WEB_DEVELOPER_BLOG: 'http://webdeveloperblog.cba.pl',
      };
    });

    afterEach(() => {
      process.env = originalEnv;
    });

    it('renders link', () => {
      expect(getLinkWithParameter(parameter)).toEqual(
        `${process.env.REACT_APP_URLS_WEB_DEVELOPER_BLOG}`,
      );
    });
  });

  describe('staff channel', () => {
    const originalEnv = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = {
        ...originalEnv,
        REACT_APP_CHANNEL_TYPE: 'staff',
        REACT_APP_URLS_WEB_DEVELOPER_BLOG: 'http://webdeveloperblog.cba.pl',
      };
    });

    afterEach(() => {
      process.env = originalEnv;
    });

    it('renders link', () => {
      expect(getLinkWithParameter(parameter)).toEqual(
        `${process.env.REACT_APP_URLS_WEB_DEVELOPER_BLOG}/${parameter}`,
      );
    });
  });
});

describe('encodeQueryData()', () => {
  const data = {
    market: 'HK',
    productType: 'BP',
  };

  it('encode data', () => {
    expect(encodeQueryData(data)).toEqual(`market=HK&productType=BP`);
  });
});
