import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NOTIFICATION_TYPES} from '../../store/types/notification'
import * as S from './Notify.styles'

export const Notify = function () {
  const dispatch = useDispatch()
  const {type, message, show} = useSelector((state) => state.notification)

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        handleClose()
      }, 4000)
    }
  }, [show])
  const handleClose = () => {
    dispatch({
      type: NOTIFICATION_TYPES.SHOW_NOTIFICATION,
      payload: {type: "", message: "", show: false},
    })
  };
  const background = {
    error: '#D32F2F',
    success: '#2E7D32',
    info: '#0288D1',
    warning: "#ED6C02",
  }
  return (
    <S.Wrapper>
      {show && <S.NotifyBlock background={background[type]}>
        <span>{message} !</span>
      </S.NotifyBlock>}
    </S.Wrapper>
  );
}


export default Notify