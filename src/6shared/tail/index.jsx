import clsx from 'clsx'
import classes from './style.module.css'
import { useEffect, useState } from 'react'
import { InputAdminChange } from '../input'
import { ChangeIcon } from '../icon'
import Row from './row'

export default function Tail({ index, elem, admin, adminChange }) {
  let variant
  switch (index) {
    case 0:
      variant = 'first'
      break
    case 1:
      variant = 'second'
      break
    case 2:
      variant = 'third'
      break
    case 3:
      variant = 'fourth'
      break
    default:
      variant = 'first'
      break
  }

  const [isChange, setIsChange] = useState(false)
  const [valueNow, setValueNow] = useState({})

  useEffect(() => {
    setValueNow({
      title: elem.title,
      value: [elem.value.value, elem.value.add],
      sub: elem.sub,
    })
  }, [elem])

  function handleOnChange(e) {
    setValueNow((state) => {
      const key = e.target.dataset.key
      let variant = 'one'
      if (key === 'addItem') {
        variant = 'two'
      } else if (key === 'value') {
        variant = 'three'
      }
      let targetValue = e.target.value.replace(/#/g, '').replace(/\^/g, '')

      const variants = {
        one: {
          ...state,
          [key]: targetValue.slice(0, 15),
        },
        two: {
          ...state,
          value: [state.value[0], targetValue.slice(0, 4)],
        },
        three: {
          ...state,
          value: [targetValue.slice(0, 4), state.value[1]],
        },
      }[variant]

      return variants
    })
  }

  return (
    <div key={elem.id} className={clsx(classes.tail, classes[variant])}>
      {admin && (
        <ChangeIcon
          onSave={() => adminChange({ id: elem.id, data: valueNow })}
          isChange={isChange}
          onCLick={() => setIsChange((state) => !state)}
        />
      )}
      {Object.values(valueNow).map((element, index) => {
        return (
          <Row
            index={index}
            isChange={isChange}
            value={element}
            adminOnChange={(e) => handleOnChange(e)}
          />
        )
      })}
    </div>
  )
}
