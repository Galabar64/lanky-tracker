import {
  useGalleonCannon,
  useGalleonCavernTop,
  useGalleonHighTide,
  useGalleonLighthouseArea,
  useGalleonLowTide,
  useGalleonOutskirts,
  useGalleonTreasureRoom,
  usePlayGalleon
} from '@renderer/hooks/galleon'
import { logicBreak } from '@renderer/hooks/world'
import GalleonCheck from './GalleonCheck'
import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import { useAnyKong } from '@renderer/hooks/kongs'
import KasplatPool from '../pools/Kasplats'

const Vanilla: React.FC = () => {
  const inStage = usePlayGalleon()
  const galleonTop = useGalleonCavernTop()
  const outskirts = useGalleonOutskirts()
  const treasure = useGalleonTreasureRoom()
  const lighthouseArea = useGalleonLighthouseArea()
  const lowTide = useGalleonLowTide()
  const highTide = useGalleonHighTide()
  const cannon = useGalleonCannon()
  const [diddy, spring, tiny, lanky, chunky] = useDonkStore(
    useShallow((state) => [state.diddy, state.spring, state.tiny, state.lanky, state.chunky])
  )

  return (
    <>
      <GalleonCheck
        id={4050}
        name="Galleon Kasplat Diddy Gold Tower"
        region="Treasure Room"
        canGetLogic={treasure.in && diddy && spring}
        canGetBreak={treasure.out && (diddy || tiny) && (lanky || chunky)}
      />
      <GalleonCheck
        id={4051}
        name="Galleon Kasplat Lighthouse Alcove"
        region="Lighthouse Area"
        canGetLogic={lighthouseArea && lowTide}
      />
      <GalleonCheck
        id={4052}
        name="Galleon Kasplat Cannon Game Room"
        region="Galleon Caverns"
        canGetLogic={cannon && highTide}
        canGetBreak={cannon}
      />
      <GalleonCheck
        id={4053}
        name="Galleon Kasplat Past Vines"
        region="Galleon Caverns"
        canGetLogic={inStage && galleonTop.in}
        canGetBreak={inStage && logicBreak(galleonTop)}
      />
      <GalleonCheck
        id={4054}
        name="Galleon Kasplat Musical Cactus"
        region="Shipyard Outskirts"
        canGetLogic={outskirts}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayGalleon()

  return (
    <>
      <GalleonCheck id={4250} name="Galleon Kasplat Location #1" canGetLogic={inStage && anyKong} />
      <GalleonCheck id={4251} name="Galleon Kasplat Location #2" canGetLogic={inStage && anyKong} />
      <GalleonCheck id={4252} name="Galleon Kasplat Location #3" canGetLogic={inStage && anyKong} />
      <GalleonCheck id={4253} name="Galleon Kasplat Location #4" canGetLogic={inStage && anyKong} />
      <GalleonCheck id={4254} name="Galleon Kasplat Location #5" canGetLogic={inStage && anyKong} />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.shuffleKasplats))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations