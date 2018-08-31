import React from 'react';

const withRenderLog = WrapperComponent => props => {
  // eslint-disable-next-line
  console.group(`@${WrapperComponent.name}`);
  // eslint-disable-next-line
  console.log('re-render');
  // eslint-disable-next-line
  console.groupEnd(`@${WrapperComponent.name}`);

  return <WrapperComponent {...props} />;
};

export default withRenderLog;
