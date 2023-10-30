import {useEffect, useState} from 'react';
import styles from './Input.module.css';

function Input({setCount}) {

  const [value,
    setValue] = useState('');
  const [showChanges,
    setShowChanges] = useState(false);

  useEffect(() => {
    value !== ''
      ? setShowChanges(true)
      : setShowChanges(false);
  }, [value])

  const addValue = (value) => {
    if (value !== '') {
      setCount(prevCount => prevCount + parseInt(value, 10));
      setValue('');
      setShowChanges(false);
    }
  }

  return (
    <div>
      <input
        className={styles.input}
        placeholder='Enter a number'
        value={value}
        type='text'
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addValue(value)}></input>
      {showChanges && <p className={styles.text}>Input data...</p>
}
    </div>
  )
}

export default Input