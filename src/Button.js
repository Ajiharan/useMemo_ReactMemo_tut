import React from 'react';

function Button({ coffeeName, make }) {
  console.log(`Button Component ${coffeeName} rendered`);
  return (
    <button className="coffe" onClick={() => make(coffeeName)}>
      Make {coffeeName}
    </button>
  );
}

export default React.memo(Button);
