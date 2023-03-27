import renderWithRouter from 'utils/tests/renderWithRouter';
import {shared} from 'sharedConstants';

import RequireSearchParam from './RequireSearchParam';
const paths = {...shared.routes};

const defaultProps = {
  children: <div>Page</div>,
  path: paths.mainPage.root,
};

describe('<RequireSearchParam/>', () => {
  it('render without crashing', () => {
    const {container} = renderWithRouter(<RequireSearchParam {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
