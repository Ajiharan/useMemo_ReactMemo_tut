import React, { useMemo, useRef } from 'react';

function MemorizedCount({ coffeeName, count }) {
  const ref = useRef(0);

  const incrementCounter = () => ref.current++;

  const memorizedValue = useMemo(() => incrementCounter(), [coffeeName]);

  return (
    <p>
      [{memorizedValue}] : {coffeeName} maked {count + 1} times
    </p>
  );
}

export default MemorizedCount;
