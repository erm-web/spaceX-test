import clsx from 'clsx'
import classes from './style.module.css'
import IACClasses from './IACClasses.module.css'

import { useState } from 'react'

export function Input({ onChange, value, type }) {
  return <input className={clsx(classes.input)} onChange={onChange} value={value} type={type} />
}

export function InputAdminChange({ datakey, value, onChange, style }) {
  return (
    <div style={style} className={clsx(IACClasses.box)}>
      <input
        data-key={datakey}
        className={clsx(IACClasses.input)}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
