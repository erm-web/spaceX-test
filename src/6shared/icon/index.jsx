import clsx from 'clsx'
import { ReactComponent as SvgPen } from '../assets/pen.svg'
import { ReactComponent as SvgClose } from '../assets/close.svg'

export function ChangeIcon({ style, onCLick, isChange, onSave }) {
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 10, ...style }}>
      {isChange ? (
        <SvgClose
          style={{ cursor: 'pointer' }}
          width={20}
          stroke="coral"
          color="coral"
          onClick={() => {
            onSave()
            onCLick()
          }}
        />
      ) : (
        <SvgPen style={{ cursor: 'pointer' }} width={20} fill="coral" onClick={onCLick} />
      )}
    </div>
  )
}
