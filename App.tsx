import React, { useState } from 'react';
import { Skeletons } from './src/components';

const App = () => {
  const [loading, setLoading] = useState(true)
  return (
    <>
      {loading &&
        (
          <Skeletons />
        )
      }
    </>
  );
};

export default App;
