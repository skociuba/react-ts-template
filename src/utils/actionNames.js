const actionNames = (actions) =>
  actions.reduce((names, name) => {
    names[name] = name;
    return names;
  }, {});

export default actionNames;
