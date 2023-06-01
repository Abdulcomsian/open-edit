import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {View} from 'react-native';
import TextComponent from '../TextComponent/TextComponent';
import {getFontSize} from '../../utils/metrics';

const Timer = forwardRef(({countDown = 180, onRestart}, ref) => {
  const [timeRemaining, setTimeRemaining] = useState(countDown);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setTimeRemaining(prevTime => {
          if (prevTime === 0) {
            resetTimer();
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeRemaining(180);
  };

  const formatTime = time => {
    if (time > 0) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;

      return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;
    }
  };

  const startCountDown = () => {
    setIsRunning(true);
  };

  useImperativeHandle(ref, () => ({
    startCountDown,
  }));
  return (
    <View>
      <TextComponent font={'outfit-medium'} style={{fontSize: getFontSize(16)}}>
        {formatTime(timeRemaining)}
      </TextComponent>
    </View>
  );
});

export default Timer;
