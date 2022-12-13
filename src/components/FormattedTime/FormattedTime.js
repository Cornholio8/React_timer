import styles from './FormattedTime.module.scss';
import {useEffect} from 'react';
import {useState} from 'react';
import Button from '../Button/Button'

const FormattedTime = () => {

  const [time, setTime] = useState(0);
  const [isActive, setActive] = useState(false);

  let milliseconds = String(time).slice(-3);
  let seconds = String(Math.floor(time / 1000) % 60).padStart(2, "0");
  let minutes = String(Math.floor(time / 1000 / 60) % 60).padStart(2, "0");
  let hours = String(Math.floor(time / 1000 / 60 / 60)).padStart(2, "0");

  useEffect(() => {
    let timer;

    if(isActive) {
      timer = setInterval(() => {
        setTime((prevValue) => prevValue + 1)
      }, 1);
    } else if (!isActive) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  return (
    <div>
      <h1 className={styles.FormattedTime}>{hours}:{minutes}:{seconds}.{milliseconds}</h1>
      <div className={styles.buttons}>
        <Button onClick={() => setActive(true)}>Start</Button>
        <Button onClick={() => setActive(false)}>Stop</Button>
        <Button onClick={() => setTime(0)}>Reset</Button>
      </div>
    </div>
  )
};

export default FormattedTime;