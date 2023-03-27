import {render, screen, waitFor} from '@testing-library/react';
import {useSelector, useDispatch} from 'react-redux';
import React from 'react';

import enhancedRenderer from '../../utils/tests/enhancedRenderer';

import Test from './Test';
import {fetchTestData} from './actions';

const state = {
  test: {
    test: {
      data: null,
      loading: true,
      error: null,
    },
  },
};
const state2 = {
  test: {
    test: {
      data: {
        data: [
          {
            _id: '64078d9b6a2c7ca273ccbd40',
            name: 'John Doe',
            trips: 250,
            airline: [
              {
                id: 5,
                name: 'Eva Air',
                country: 'Taiwan',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png',
                slogan: 'Sharing the World, Flying Together',
                head_quaters: '376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan',
                website: 'www.evaair.com',
                established: '1989',
              },
            ],
            __v: 0,
          },
        ],
      },
      loading: false,
      error: null,
    },
  },
};
jest.mock('react-redux');

describe('Test component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('displays loading skeleton when testLoadingExample is true', () => {
    useSelector.mockImplementation((selector) => selector(state));
    enhancedRenderer(<Test />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('dispatches fetchTestData action on mount', () => {
    render(<Test />);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(fetchTestData());
  });

  it('displays test data when testData is not null', async () => {
    useSelector.mockImplementation((selector) => selector(state2));
    enhancedRenderer(<Test />);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    await waitFor(async () => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });
});
