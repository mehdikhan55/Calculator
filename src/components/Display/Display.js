import React from 'react'
import styles from './Display.module.css'

export default function Display(props) {
    

    return (
        <div className={`${styles.calDisplay}`}>
            <div className={`${styles.resultArea}`}>
                <strong ref={props.resultRef} style={{ backgroundColor: '#312f2f' }}>
                    ={props.result}
                </strong>
            </div>
            <div className={`${styles.inputArea}`}>
                <input ref={props.inputRef} className={`${styles.inputText}`} type="number" name="" id="" placeholder='0 ' />
            </div>
        </div>
    )
}
