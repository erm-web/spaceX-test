import clsx from 'clsx'
import classes from './style.module.css'
import { InputAdminChange } from '../input'
import { useEffect, useRef, useState } from 'react'

export default function Row({ index, children, isChange, value, adminOnChange }) {
  let variant = 'one'
  if (typeof value === 'object') {
    variant = 'two'
  }
  let key
  switch (index) {
    case 0:
      key = 'title'
      break
    case 1:
      key = 'value'
      break
    case 2:
      key = 'sub'
      break
    default:
      break
  }
  const variants = {
    one: (
      <p style={{ zIndex: 3 }} data-row={key}>
        {!isChange ? (
          value
        ) : (
          <InputAdminChange datakey={key} value={value} onChange={adminOnChange} />
        )}
      </p>
    ),
    two: (
      <p style={{ zIndex: 3 }} data-row={key}>
        {!isChange
          ? [value[0], <span>{value[1]}</span>]
          : [
              <InputAdminChange datakey={key} value={value[0]} onChange={adminOnChange} />,
              <InputAdminChange datakey={'addItem'} value={value[1]} onChange={adminOnChange} />,
            ]}
      </p>
    ),
  }[variant]
  return variants
}
