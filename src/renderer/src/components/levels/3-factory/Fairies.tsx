import FairyPool from '@renderer/components/pools/Fairies'
import { useFactoryTesting, usePlayFactory, useSlamFactory } from '@renderer/hooks/factory'
import { useAnyKong, useCamera, useFeather, useMini } from '@renderer/hooks/kongs'
import { useShuffleFairies } from '@renderer/hooks/settings'
import FactoryCheck from './FactoryCheck'

const Vanilla: React.FC = () => {
  const testing = useFactoryTesting()
  const camera = useCamera()
  const anyKong = useAnyKong()
  const mini = useMini()
  const feather = useFeather()
  const canSlam = useSlamFactory()
  return (
    <>
      <FactoryCheck
        id={3080}
        name="Factory Fairy Counting"
        region="Testing Area"
        canGetLogic={testing && camera && anyKong}
      />
      <FactoryCheck
        id={3081}
        name="Factory Fairy Dartboard"
        region="Testing Area"
        canGetLogic={testing && camera && mini && canSlam && feather}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayFactory()
  const camera = useCamera()

  return (
    <>
      <FactoryCheck
        id={3280}
        name="Factory Fairy Location #1"
        canGetLogic={inStage && anyKong && camera}
      />
      <FactoryCheck
        id={3281}
        name="Factory Fairy Location #2"
        canGetLogic={inStage && anyKong && camera}
      />
    </>
  )
}

const FairyLocations: React.FC = () => {
  const locations = useShuffleFairies() ? <Shuffled /> : <Vanilla />
  return <FairyPool>{locations}</FairyPool>
}

export default FairyLocations
