import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {ErrorMessage} from '../../components/Modules/ErrorMessage/index';

import {fetchTestData} from './actions';
import {testDataSelector, testLoadingSelector, errorSelector} from './selectors';
import {contentContainer} from './Test.style';

const Test: React.FC = () => {
  const dispatch = useDispatch();

  const testData = useSelector((state) => testDataSelector(state));
  const errorCode = useSelector((state) => errorSelector(state));
  const testLoadingExample = useSelector((state) => testLoadingSelector(state));

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const componentContent = testLoadingExample ? (
    'Loading...'
  ) : (
    <section data-testid="test-container">
      {ErrorMessage(errorCode)}

      {testData?.length > 0 &&
        testData.map((user) => (
          <div key={user._id}>
            <p>{user.name}</p>
            <p>{user.trips}</p>
            {user?.airline?.map((item) => (
              <p key={item.id}>
                <p>{item.name}</p>
                <p>{item.head_quaters}</p>
              </p>
            ))}
          </div>
        ))}
    </section>
  );
  return <div className={contentContainer}>{componentContent}</div>;
};

export default Test;
