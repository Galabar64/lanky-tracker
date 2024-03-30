import { useShallow } from 'zustand/react/shallow'

import KasplatPool from '@renderer/components/pools/Kasplats'
import {
  useAztec5DoorTemple,
  useAztecBack,
  useAztecFront,
  useAztecLlamaLava
} from '@renderer/hooks/aztec'
import {
  useAnyKong,
  useCoconut,
  usePineapple,
  useRocket,
  useStrong,
  useTwirl
} from '@renderer/hooks/kongs'
import { logicBreak } from '@renderer/hooks/world'
import useDonkStore from '@renderer/store'
import AztecCheck from './AztecCheck'

const Vanilla: React.FC = () => {
  const aztecFront = useAztecFront()
  const aztecBack = useAztecBack()
  const lava = useAztecLlamaLava()
  const aztec5Door = useAztec5DoorTemple()
  const strong = useStrong()
  const twirl = useTwirl()
  const coconut = useCoconut()
  const rocket = useRocket()
  const pineapple = usePineapple()
  return (
    <>
      <AztecCheck
        id={2050}
        name="Aztec Kasplat Behind DK Stone Door"
        region="Various Aztec Tunnels"
        canGetLogic={aztecFront.in && coconut && (strong || twirl)}
        canGetBreak={aztecFront.out && coconut}
      />
      <AztecCheck
        id={2051}
        name="Aztec Kasplat On Tiny Temple"
        region="Aztec Oasis And Totem Area"
        canGetLogic={aztecFront.in && rocket}
        canGetBreak={aztecFront.out && rocket}
      />
      <AztecCheck
        id={2052}
        name="Aztec Kasplat Llama Temple Lava"
        region="Llama Temple"
        canGetLogic={lava.in}
        canGetBreak={logicBreak(lava)}
      />
      <AztecCheck
        id={2053}
        name="Aztec Kasplat Hunky Chunky Barrel"
        region="Various Aztec Tunnels"
        canGetLogic={aztecBack.in}
        canGetBreak={aztecBack.out}
      />
      <AztecCheck
        id={2054}
        name="Aztec Kasplat Chunky 5-Door Temple"
        region="5 Door Temple"
        canGetLogic={aztec5Door.in && pineapple}
        canGetBreak={aztec5Door.out && pineapple}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const anyKong = useAnyKong()
  const inStage = useAztecFront()

  return (
    <>
      <AztecCheck
        id={2250}
        name="Aztec Kasplat Location #1"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2251}
        name="Aztec Kasplat Location #2"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2252}
        name="Aztec Kasplat Location #3"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2253}
        name="Aztec Kasplat Location #4"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
      <AztecCheck
        id={2254}
        name="Aztec Kasplat Location #5"
        canGetLogic={inStage.in && anyKong}
        canGetBreak={logicBreak(inStage) && anyKong}
      />
    </>
  )
}

const KasplatLocations: React.FC = () => {
  const shuffle = useDonkStore(useShallow((state) => state.settings.shuffleKasplats))
  const locations = shuffle ? <Shuffled /> : <Vanilla />
  return <KasplatPool>{locations}</KasplatPool>
}

export default KasplatLocations