import { useShallow } from 'zustand/react/shallow'

import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { usePlayCaves } from '@renderer/hooks/caves'
import {
  useAnyKong,
  useBarrel,
  useHunky,
  useMonkeyport,
  usePunch,
  useShockwave
} from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import CavesCheck from './CavesCheck'

const VanillaDirtLocations: React.FC = () => {
  const inStage = usePlayCaves()
  const shockwave = useShockwave()
  const port = useMonkeyport()
  const punch = usePunch()
  const hunky = useHunky()
  const barrel = useBarrel()
  return (
    <CavesCheck
      id={6070}
      name="Caves Dirt Giant Kosha"
      region="Igloo Area"
      canGetLogic={inStage && shockwave && port && punch && barrel && hunky}
      canGetBreak={inStage && shockwave && port && punch && barrel}
    />
  )
}

const ShuffledDirtLocations: React.FC = () => {
  const anyKong = useAnyKong()
  const shockwave = useShockwave()
  const inStage = usePlayCaves()
  return (
    <>
      <CavesCheck
        id={6270}
        name="Caves Dirt Location #1"
        canGetLogic={inStage && anyKong && shockwave}
      />
      <CavesCheck
        id={6271}
        name="Caves Dirt Location #2"
        canGetLogic={inStage && anyKong && shockwave}
      />
    </>
  )
}

const DirtLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleDirt))
  const locations = shuffle ? <ShuffledDirtLocations /> : <VanillaDirtLocations />
  return <RainbowCoinPool>{locations}</RainbowCoinPool>
}

export default DirtLocations