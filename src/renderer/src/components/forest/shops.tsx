import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ForestCheck from './ForestCheck'
import { useForestBean, usePlayForest } from '@renderer/hooks/world'

const ForestShops: React.FC = () => {
  const [dk, diddy, lanky, tiny, chunky] = useDonkStore(
    useShallow((state) => [state.dk, state.diddy, state.lanky, state.tiny, state.chunky])
  )
  const anyKong = dk || diddy || lanky || tiny || chunky
  const inStage = usePlayForest()
  const beanstalk = useForestBean()

  /* TODO: Don't render if no shop shuffle. */
  return (
    <>
      <ForestCheck
        id={5110}
        name="Forest Cranky Shared"
        region="Forest Shops"
        canGetLogic={inStage && anyKong}
      />
      <ForestCheck
        id={5111}
        name="Forest Cranky DK"
        region="Forest Shops"
        canGetLogic={inStage && dk}
      />
      <ForestCheck
        id={5112}
        name="Forest Cranky Diddy"
        region="Forest Shops"
        canGetLogic={inStage && diddy}
      />
      <ForestCheck
        id={5113}
        name="Forest Cranky Lanky"
        region="Forest Shops"
        canGetLogic={inStage && lanky}
      />
      <ForestCheck
        id={5114}
        name="Forest Cranky Tiny"
        region="Forest Shops"
        canGetLogic={inStage && tiny}
      />
      <ForestCheck
        id={5115}
        name="Forest Cranky Chunky"
        region="Forest Shops"
        canGetLogic={inStage && chunky}
      />
      <ForestCheck
        id={5120}
        name="Forest Funky Shared"
        region="Forest Shops"
        canGetLogic={beanstalk && anyKong}
      />
      <ForestCheck
        id={5121}
        name="Forest Funky DK"
        region="Forest Shops"
        canGetLogic={beanstalk && dk}
      />
      <ForestCheck
        id={5122}
        name="Forest Funky Diddy"
        region="Forest Shops"
        canGetLogic={beanstalk && diddy}
      />
      <ForestCheck
        id={5123}
        name="Forest Funky Lanky"
        region="Forest Shops"
        canGetLogic={beanstalk && lanky}
      />
      <ForestCheck
        id={5124}
        name="Forest Funky Tiny"
        region="Forest Shops"
        canGetLogic={beanstalk && tiny}
      />
      <ForestCheck
        id={5125}
        name="Forest Funky Chunky"
        region="Forest Shops"
        canGetLogic={beanstalk && chunky}
      />
    </>
  )
}

export default ForestShops
