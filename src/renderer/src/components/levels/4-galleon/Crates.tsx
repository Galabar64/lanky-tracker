import CratePool from '@renderer/components/pools/Crates'
import { useGalleonOutskirts, usePlayGalleon } from '@renderer/hooks/galleon'
import { useAnyKong } from '@renderer/hooks/kongs'
import { useShuffleCrates } from '@renderer/hooks/settings'
import GalleonCheck from './GalleonCheck'

const Vanilla: React.FC = () => {
  const outskirts = useGalleonOutskirts()
  const anyKong = useAnyKong()
  return (
    <>
      <GalleonCheck
        id={4060}
        name="Galleon Crate Cactus"
        region="Shipyard Outskirts"
        canGetLogic={outskirts && anyKong}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = usePlayGalleon()

  return (
    <>
      <GalleonCheck
        id={4260}
        name="Galleon Crate Location #1 (maybe)"
        canGetLogic={inStage && anyKong}
      />
      <GalleonCheck
        id={4261}
        name="Galleon Crate Location #2 (maybe)"
        canGetLogic={inStage && anyKong}
      />
    </>
  )
}

const CrateLocations: React.FC = () => {
  const locations = useShuffleCrates() ? <Shuffled /> : <Vanilla />
  return <CratePool>{locations}</CratePool>
}

export default CrateLocations
