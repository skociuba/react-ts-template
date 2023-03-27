import Application from './Application';

const defaultProps = {
  appCheckConfig: jest.fn(),
  config: {},
};

describe('<Application />', () => {
  it('render without crashing', () => {
    const testId = 'applicationContainer';
    const wrapper = enhancedRender(
      <Application
        data-testid={testId}
        appCheckConfig={defaultProps.appCheckConfig}
        config={defaultProps.config}
      />,
    );

    const {getByTestId, container} = wrapper;
    expect(getByTestId(testId)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
