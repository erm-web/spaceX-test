import clsx from 'clsx'
import classes from './style.module.css'

import RocetBg from '../../5entities/bgRocet/bgRocet'
import MainBg from '../../3widgets/mainBg'
import ButtonAccent from '../../6shared/buttonAccent'

import { useSizeWindow } from '../../6shared/hooks'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

import imgLine from './poloska.png'
import InformationTails from '../../3widgets/informationTails'
import { setTails } from '../../3widgets/informationTails/modal/api'

export default function Main({ prop }) {
  const size = useSizeWindow()

  const [isClipPath, setIsClipPath] = useState()
  const [imgLoaded, setImgLoaded] = useState(false)
  const dispath = useDispatch()

  useEffect(() => {
    if (size < 1170 || size > 2250 || !imgLoaded) {
      setIsClipPath(false)
    } else {
      setIsClipPath(true)
    }
  }, [size, imgLoaded])

  return (
    <div className={clsx('mainSection')}>
      <MainBg callback={setImgLoaded} />
      <div className={clsx('container')}>
        <section className={clsx(classes.mainTitleSection)}>
          {imgLoaded && isClipPath && size < 2200 && (
            <img className={clsx(classes.line)} src={imgLine} alt="" />
          )}
          <div className={clsx(classes.titleBlock, classes.left)}>
            <h1 className={clsx(classes.title, isClipPath && classes.clip)}>ПУТЕШЕСТВИЕ</h1>
            <h2 className={clsx(classes.subTitle, isClipPath && classes.clip)}>
              на красную планету
            </h2>
            <ButtonAccent style={{ marginTop: 92 }} title={'Начать путешествие'} />
          </div>
          <div className={clsx(classes.titleBlock)}>
            <InformationTails />
          </div>
        </section>
      </div>
    </div>
  )
}
