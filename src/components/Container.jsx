// components/Container.js
import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="max-w-[1128px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
