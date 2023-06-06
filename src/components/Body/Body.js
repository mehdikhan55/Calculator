import React from 'react'
import styles from './Body.module.css'

export default function Body(props) {
  return (
    <div className={`${styles.calBody}`}>
      {props.children}
    </div>
  )
}
