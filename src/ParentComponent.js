import React, { useState, useEffect, useCallback } from 'react';
import './style.css';
import Button from './Button';
import MemorizedCount from './MemorizedCount';
function ParentComponent() {
  console.log('parent component rendered');
  const [coffe, makeCoffee] = useState('');
  const [incredient, setIncredient] = useState('');
  const [count, setCount] = useState(0);

  const addIncredient = () => {
    switch (coffe) {
      case 'Affogato':
        setIncredient('vanilla');
        return;
      case 'Cappuccino':
        setIncredient('milk');
        return;
      case 'Caffe Gommosa':
        setIncredient('marshmallow');
        return;
    }
  };

  useEffect(addIncredient, [coffe]);

  //useCallback memorize value in prevState so count and coffe value are not change in within make function  eg: count is always 0 and coffee is always empty value

  const make = useCallback((coffeeName) => {
    makeCoffee((prevCoffee) => {
      if (prevCoffee !== coffeeName) setCount(0);
      else setCount((c) => c + 1);
      return coffeeName;
    });
  }, []);
  return (
    <div>
      <h3>Coffee Maker</h3>
      <div
        className="buttons"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Button coffeeName={'Cappuccino'} make={make} />
        <Button coffeeName={'Caffe Gommosa'} make={make} />
        <Button coffeeName={'Affogato'} make={make} />
      </div>
      <p>{!!coffe && `${coffe} made with ${incredient}`}</p>
      {!!coffe && <MemorizedCount count={count} coffeeName={coffe} />}
    </div>
  );
}

export default ParentComponent;
