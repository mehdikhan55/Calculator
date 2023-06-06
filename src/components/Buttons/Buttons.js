  import React,{useRef, useState} from 'react'
import styles from './Buttons.module.css'


export default function Buttons(props) {
  function reseting(e){
    {props.resetResult(e)}
    {props.resetInput(e)}
  }
  

  return (
    <div className={`${styles.calButtons}`}>
      <div className={`${styles.btnRow}`}>
        <div className={`${styles.calNormalUpperBtn} ${styles.btn}`}>Shift</div>
        <div className={`${styles.calNormalUpperBtn} ${styles.btn}`}>-</div>
        <div className={`${styles.calNormalUpperBtn} ${styles.btn}`}>-</div>
        <div className={`${styles.calNormalUpperBtn} ${styles.btn}`}>-</div>
        <div className={`${styles.calBigBtn} ${styles.btn}`}>On</div>
      </div>
      <div className={`${styles.btnRow}`}>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>7</div>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>8</div>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>9</div>
        <div onClick={props.resetInput} className={`${styles.calNormalBtn} ${styles.btn}`}>Del</div>
        <div onClick={reseting} className={`${styles.calBigBtn} ${styles.btn}`}>C</div>
      </div>
      <div className={`${styles.btnRow}`}>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>4</div>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>5</div>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>6</div>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>X</div>
        <div onClick={props.plus} className={`${styles.calBigBtn} ${styles.btn}`}>+</div>
      </div>
      <div className={`${styles.btnRow} ${styles.btn}`}>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>1</div>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>2</div>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>3</div>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>/</div>
        <div className={`${styles.calBigBtn} ${styles.btn}`}>-</div>
      </div>
      <div className={`${styles.btnRow}`}>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>%</div>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>0</div>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>. </div>
        <div className={`${styles.calNormalBtn} ${styles.btn}`}>√ </div>
        <div className={`${styles.calBigBtn} ${styles.btn}  `}>=</div>
      </div>
      
      
      </div>
      
  )
}
