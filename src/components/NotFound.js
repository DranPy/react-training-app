import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

export default () => {
  return (
    <div className="not-found">
      <div className="container">
        <h1 className="text-center">
          <FA icon="ban" size="3x" />
          <div>Page not found</div>
        </h1>
      </div>
    </div>
  );
};
