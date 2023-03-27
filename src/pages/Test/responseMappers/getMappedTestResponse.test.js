import {getMappedTestResponse} from './getMappedTestResponse';

const response = {
  payload: {
    data: {
      name: 'Carlos Perez',
      trips: 555,
      __v: 0,
      _id: '5fec6be74a637f52d5a5e423',
      airline: {
        country: 'Taiwan',
        established: '1989',
        head_quaters: '376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan',
        id: 5,
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png',
        name: 'Eva Air',
        slogan: 'Sharing the World, Flying Together',
        website: 'www.evaair.com',
      },
    },
    example: 'hello',
  },
};

describe('Test - response mappers', () => {
  it('return correct test data', () => {
    expect(getMappedTestResponse(response)).toEqual({
      data: {
        name: 'Carlos Perez',
        trips: 555,
        __v: 0,
        _id: '5fec6be74a637f52d5a5e423',
        airline: {
          country: 'Taiwan',
          established: '1989',
          head_quaters: '376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan',
          id: 5,
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png',
          name: 'Eva Air',
          slogan: 'Sharing the World, Flying Together',
          website: 'www.evaair.com',
        },
      },
      example: 'hello',
    });
    expect(getMappedTestResponse(null)).toEqual(null);
  });
});
