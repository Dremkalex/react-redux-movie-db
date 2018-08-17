const logger = store => next => action => {
  console.group('Logger');
  console.log(`Action: ${JSON.stringify(action)}, Store: ${store}`);
  console.groupEnd('Logger');

  next(action);
};

export default logger;
