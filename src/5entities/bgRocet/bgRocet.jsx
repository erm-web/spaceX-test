import clsx from 'clsx'
import classes from './style.module.css'
import rocketImg from '../../6shared/assets/imgBg.png'
import lowQRocket from '../../6shared/assets/lowQualityImgBg.png'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { Transition } from 'react-transition-group'
export default function RocetBg({ prop, style, callback }) {
  const [mountPl, setMountPl] = useState(true)
  return (
    <div style={style} className={clsx(classes.box)}>
      <img
        onLoad={() => {
          setTimeout(() => {
            callback && callback(true)
            setMountPl(false)
          }, 500)
        }}
        className={clsx(classes.imgRocket)}
        src={rocketImg}
        alt="rocket"
      />
      <Transition in={mountPl} unmountOnExit timeout={300}>
        {(state) => {
          return (
            <>
              <div className={clsx(classes.plug, classes[state])}></div>
              {mountPl && (
                <img
                  className={clsx(classes.imgRocket, classes[state], classes.pl)}
                  src={lowQRocket}
                  alt="bgBody"
                />
              )}
            </>
          )
        }}
      </Transition>
    </div>
  )
}
