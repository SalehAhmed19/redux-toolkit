const logger = (store) => (next) => (action) => {
  const currenState = store.getState();
  console.log("\x1b[31m%s\x1b[0m", "Current State : ", currenState);
  console.log("\x1b[32m%s\x1b[0m", "Action : ", action);
  next(action);
  console.log("\x1b[33m%s\x1b[0m", "Updated State : ", store.getState());
};

export default logger;
