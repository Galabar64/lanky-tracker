import { useShallow } from 'zustand/react/shallow'

import CompanyPool from '@renderer/components/pools/Company'
import {
  useFactoryProductionEnabled,
  useFactoryTesting,
  usePlayFactory,
  useSlamFactory
} from '@renderer/hooks/factory'
import { useBlast, useCoconut, useDiddy, useDk, useGrab, useStrong } from '@renderer/hooks/kongs'
import useDonkStore from '@renderer/store'
import FactoryCheck from '../FactoryCheck'

const DkBananas: React.FC = () => {
  const inStage = usePlayFactory()
  const testing = useFactoryTesting()
  const canSlam = useSlamFactory()
  const production = useFactoryProductionEnabled()
  const dk = useDk()
  const coconut = useCoconut()
  const grab = useGrab()
  const strong = useStrong()
  const blast = useBlast()
  const diddy = useDiddy()
  const [productionPower, blastArcade] = useDonkStore(
    useShallow((state) => [
      state.removeBarriers.factoryProduction,
      state.settings.fastChecks.factoryArcade
    ])
  )
  return (
    <>
      <FactoryCheck
        id={3001}
        name="Factory DK Number Game"
        region="Testing Area"
        canGetLogic={testing && dk && canSlam}
      />
      <FactoryCheck
        id={3002}
        name="Factory DK Power Hut"
        region="Storage And Arcade"
        canGetLogic={testing && coconut && (productionPower || grab)}
      />
      <FactoryCheck
        id={3003}
        name="Factory DK Blast (+ Arcade?)"
        region="Storage And Arcade"
        canGetLogic={inStage && blast && (blastArcade || grab)}
      />
      <FactoryCheck
        id={3004}
        name="Factory DK Crusher Room"
        region="Production Room"
        canGetLogic={production && strong}
        canGetBreak={production && (dk || diddy)}
      />
      <CompanyPool>
        <FactoryCheck
          id={3005}
          name="Factory DK Nintendo Coin"
          region="Storage And Arcade"
          canGetLogic={inStage && blast && grab}
        />
      </CompanyPool>
    </>
  )
}

export default DkBananas