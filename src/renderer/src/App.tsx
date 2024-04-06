import Checklist from './Checklist'
import ResetTracker from './components/ResetComponent'
import RegionHints from './components/hints'
import MoveTable from './components/moves/MoveTable'
import LevelTable from './components/settings/LevelTable'
import RuntimeSettings from './components/settings/RuntimeSettings'
import SwitchsanitySelector from './components/settings/Switchsanity'

const App = (): JSX.Element => {
  return (
    <>
      <main>
        <article>
          <MoveTable />
          <LevelTable />
          <RegionHints />
          <RuntimeSettings />
          <SwitchsanitySelector />
          <ResetTracker />
        </article>
        <Checklist />
      </main>
    </>
  )
}

export default App
