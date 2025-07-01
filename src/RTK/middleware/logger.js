const logger = (store) => (next) => (action) => {
  const currenState = store.getState();
  console.log(currenState);
  next(action);
  console.log(action);
};

export default logger;
