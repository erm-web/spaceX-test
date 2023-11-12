import clsx from 'clsx'
import classes from './style.module.css'
import Tail from '../../6shared/tail'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useLayoutEffect, useState } from 'react'
import { apiTails } from './modal'

export default function InformationTails({ adminChange }) {
  const { status, data, error } = useSelector((store) => store.main.infTails)
  const auth = useSelector((store) => store.app.auth)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(apiTails.getTails())
    console.log(apiTails)
  }, [])

  useEffect(() => {
    console.log('datareset')
  }, [data])

  function handleAdminChange({ id, data }) {
    //запрос на сервер для изменения полей.
    dispatch(apiTails.setTails({ id: id, data: data }))
  }
  return (
    <div className={clsx(classes.boxTails)}>
      {status !== 'pending' &&
        data.map((elem, index) => {
          console.log(elem)
          return <Tail index={index} elem={elem} admin={auth} adminChange={handleAdminChange} />
        })}
    </div>
  )
}
