import clsx from 'clsx'
import classes from './style.module.css'
import { useEffect, useLayoutEffect, useState } from 'react'
import ButtonAccent from '../../6shared/buttonAccent'
import MainBg from '../../3widgets/mainBg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LINKS_ADMIN } from '../../6shared/consts'
import { Input } from '../../6shared/input'
import { appSliceActions } from '../../1app/store/sliceApp'

export default function Auth({ prop }) {
  const dispatch = useDispatch()
  const auth = useSelector((store) => store.app.auth)

  const [value, setValue] = useState('')
  const [warning, setWarning] = useState({
    flag: false,
    text: '',
  })

  useEffect(() => {
    if (value.length > 10) {
      setWarning({ flag: true, text: 'Пароль длинее 10 символов' })
    } else if (value.length <= 0) {
      setWarning({ flag: true, text: 'Введите пароль' })
    } else {
      setWarning({ flag: false, text: '' })
    }
  }, [value])
  const navigate = useNavigate()
  auth && navigate(LINKS_ADMIN.admin.href)

  return (
    <div className={clsx('mainSection')}>
      <MainBg callback={null} />
      <div className={clsx('container')}>
        <div className={clsx(classes.form)}>
          <Input onChange={(e) => setValue(e.target.value)} value={value} type={'pass'} />
          <p>{warning.text}</p>
          <ButtonAccent
            onClick={() => dispatch(appSliceActions.authAdmin({ value: value }))}
            disabled={warning.flag}
            title={'Авторизоваться'}
          />
        </div>
      </div>
    </div>
  )
}
