import UserRoutes from './UserRoutes'
import * as serviceWorker from './serviceWorker'
function App() {
  return (
    <>
      <UserRoutes />
    </>
  )
}
export default App

serviceWorker.register(`/firebase-messaging-sw.js`)
