import React, {useState, useCallback} from 'react';

const MultiInput = () => {
  const [inputs, setInputs] = useState('');
  const onChangeHandler = useCallback(({target: {name, value}}) =>
    setInputs((state) => ({...state, [name]: value}), []),
  );

  ///////////////////////////////////////////////////////
  const initialState = {
    firstName: '',
    lastName: '',
  };

  const [name, setName] = useState(initialState);

  const onChangeFunction = (e, inputName) => {
    setName({...name, [inputName]: e.target.value});
  };
  return (
    <div>
      multiple input example using useCallback and e.target.name ale zwraca A component is changing
      an uncontrolled input to be controlled:
      <p />
      <input key="field1" name="field1" onChange={onChangeHandler} value={inputs.field1} />
      input one: {inputs.field1}
      <p />
      <input key="field2" name="field2" onChange={onChangeHandler} value={inputs.field2} />
      input two: {inputs.field2}
      <p />
      przykład multi input bez użycia useCallback:
      <p />
      name:
      <input
        name="firstName"
        onChange={(e) => onChangeFunction(e, 'firstName')}
        value={name.firstName}
      />
      {name.firstName}
      <p />
      lastName:
      <input
        name="lastName"
        onChange={(e) => onChangeFunction(e, 'lastName')}
        value={name.lastName}
      />
      {name.lastName}
    </div>
  );
};

export default MultiInput;
