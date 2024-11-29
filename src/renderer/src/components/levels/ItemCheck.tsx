import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import { CheckValueState, Level, SelectableRegionValues } from '@renderer/store/common'
import ItemCheckSelector from '../settings/ItemCheckSelector'

export type LevelCheckProps = {
  id: number
  name: string
  region?: SelectableRegionValues
  canGetLogic: boolean
  canGetBreak?: boolean
}

type ItemCheckProps = LevelCheckProps & {
  level: Level
  value?: CheckValueState
}

const ItemCheck: React.FC<ItemCheckProps> = (props) => {
  const { id, name, region, value, canGetLogic } = props
  let { canGetBreak } = props
  const [setCheck, foolish, hoard] = useDonkStore(
    useShallow((state) => [state.setCheck, state.foolish, state.hoard])
  )
  const foolishValues = Object.values(foolish)
  const hoardValues = Object.values(hoard)
  const isFoolish = foolishValues.some((f) => f === region)
  const isHoard = hoardValues.some((f) => f === region)
  if (canGetBreak === undefined) {
    canGetBreak = canGetLogic
  }
  let logicState = 'not-available'
  if (canGetLogic) {
    logicState = 'available'
  } else if (canGetBreak) {
    logicState = 'logic-break'
  }

  const rowNames: string[] = ['check-row']
  if (value?.done) {
    rowNames.push('checked')
  }
  if (isFoolish) {
    rowNames.push('foolish')
  } else if (isHoard) {
    rowNames.push('woth')
  }
  const classNames = rowNames.join(' ')

  return (
    <>
      <div className={classNames}>
        <span>{name}</span>
        <span>&nbsp;</span>
        <span className={logicState}>⬤</span>
        <span>&nbsp;</span>
      </div>
      <div className={classNames}>{region}</div>
      <div className={classNames}>
        <ItemCheckSelector id={id} />
        <span>&nbsp;&nbsp;</span>
        <input
          key={'checkbox-' + id}
          type="checkbox"
          name={'checkbox-' + id}
          checked={!!value?.done}
          onChange={(e) => setCheck(id, { done: e.target.checked, noteItem: value?.noteItem ?? 0 })}
        />
      </div>
    </>
  )
}

export default ItemCheck
