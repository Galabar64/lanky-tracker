import useDonkStore from '@renderer/store'
import { NoteItemCheckRange, CheckValueState } from '@renderer/store/common'

import goldBananaIcon from '../../assets/images/GB.png'

import dkBpIcon from '../../assets/images/dk_bp.png'
import diddyBpIcon from '../../assets/images/diddy_bp.png'
import lankyBpIcon from '../../assets/images/lanky_bp.png'
import tinyBpIcon from '../../assets/images/tiny_bp.png'
import chunkyBpIcon from '../../assets/images/chunky_bp.png'

import bananaMedalIcon from '../../assets/images/bananamedal.png'
import rainbowCoinIcon from '../../assets/images/rainbowcoin.png'

import potionDkIcon from '../../assets/images/potion_dk.png'
import potionDiddyIcon from '../../assets/images/potion_diddy.png'
import potionLankyIcon from '../../assets/images/potion_lanky.png'
import potionTinyIcon from '../../assets/images/potion_tiny.png'
import potionChunkyIcon from '../../assets/images/potion_chunky.png'
import potionSharedIcon from '../../assets/images/potion_shared.png'

import fairyIcon from '../../assets/images/fairy.png'
import crownIcon from '../../assets/images/crown.png'
import keyIcon from '../../assets/images/key.png'
import pearlIcon from '../../assets/images/pearl.png'
import beanIcon from '../../assets/images/bean.png'
import n64CoinIcon from '../../assets/images/n64_coin.png'
import rareCoinIcon from '../../assets/images/rareware_coin.png'

import chunkyFace from '../../assets/images/chunky.png'
import diddyFace from '../../assets/images/diddy.png'
import dkFace from '../../assets/images/dk.png'
import lankyFace from '../../assets/images/lanky.png'
import tinyFace from '../../assets/images/tiny.png'
import unknownFace from '../../assets/images/unknown-small.png'

type NoteItemCheckSelectorProps = {
  id: number
}

const currImg = (val?: NoteItemCheckRange): string => {
  switch (val ?? 0) {
    case 0:
      return unknownFace
    case 1:
      return goldBananaIcon
    case 2:
      return dkBpIcon
    case 3:
      return diddyBpIcon
    case 4:
      return lankyBpIcon
    case 5:
      return tinyBpIcon
    case 6:
      return chunkyBpIcon
    case 7:
      return bananaMedalIcon
    case 8:
      return rainbowCoinIcon
    case 9:
      return potionDkIcon
    case 10:
      return potionDiddyIcon
    case 11:
      return potionLankyIcon
    case 12:
      return potionTinyIcon
    case 13:
      return potionChunkyIcon
    case 14:
      return potionSharedIcon
    case 15:
      return fairyIcon
    case 16:
      return crownIcon
    case 17:
      return keyIcon
    case 18:
      return pearlIcon
    case 19:
      return beanIcon
    case 20:
      return n64CoinIcon
    case 21:
      return rareCoinIcon
    case 22:
      return dkFace
    case 23:
      return diddyFace
    case 24:
      return lankyFace
    case 25:
      return tinyFace
    default:
      return chunkyFace
  }
}

const nextNoteItem = (val: CheckValueState): CheckValueState => {
  let target = ((val?.noteItem ?? 0) + 1) as NoteItemCheckRange
  if (target > 26) {
    target = 0
  }
  val ??= { noteItem: target, done: false }
  val.noteItem = target
  return val
}

const prevNoteItem = (val: CheckValueState): CheckValueState => {
  let target = ((val?.noteItem ?? 0) - 1) as NoteItemCheckRange
  if (target < 0) {
    target = 26
  }
  val ??= { noteItem: target, done: false }
  val.noteItem = target
  return val
}

const NoteItemCheckSelector: React.FC<NoteItemCheckSelectorProps> = (props) => {
  const [checkValue, setCheck] = useDonkStore((state) => [state.checks[props.id], state.setCheck])

  const handleNext = (): void => {
    setCheck(props.id, nextNoteItem(checkValue))
  }

  const handlePrev = (e: React.MouseEvent<HTMLImageElement>): void => {
    e.preventDefault()
    setCheck(props.id, prevNoteItem(checkValue))
  }

  return (
    <>
      <img
        height={24}
        width={24}
        className="simple-icon"
        src={currImg(checkValue?.noteItem)}
        onClick={handleNext}
        onContextMenu={handlePrev}
      />
    </>
  )
}

export default NoteItemCheckSelector
