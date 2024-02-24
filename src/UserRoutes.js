import { lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { SharedLayout, PrivateRoute, PublicRoute, Loader } from './components'
import { messaging } from 'fBase/fBase'
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))

const { REACT_APP_VAPID_KEY } = process.env

const UserRoutes = () => {
  const [token, setToken] = useState('')

  useEffect(() => {
    // console.log(`requestPermission`)
    if (!token) {
      async function requestPermission() {
        try {
          const permission = await Notification.requestPermission()
          // console.log(`permission`, permission);
          if (permission === 'granted') {
            const token = await messaging.getToken({ vapidKey: REACT_APP_VAPID_KEY })
            console.log(`Device token`, token)
            setToken(token)
            // We can send the token to the server
          } else if (permission === 'denied') {
            // Notifications are blocked
            alert(
              "Notifications are currently disabled, which may affect the functionality of the application. To enable notifications and ensure full functionality:\n\n1. Open your browser's settings or preferences.\n2. Look for 'Notifications' or 'Site settings'.\n3. Find the option to manage notifications for websites.\n4. Enable notifications or set the option to allow websites to send notifications.\n\nPlease note that enabling notifications is necessary for the application to function properly."

              // "Notifications are currently disabled, which may affect the functionality of the application. To enable notifications and ensure full functionality:\n\n1. Open your browser's settings or preferences.\n2. Look for 'Notifications' or 'Site settings'.\n3. Find the option to manage notifications for websites.\n4. Enable notifications or set the option to allow websites to send notifications.\n\nPlease note that enabling notifications is necessary for the application to function properly.\n\nFor instructions specific to your browser:\n- [Chrome](https://support.google.com/chrome/answer/3220216?hl=en&co=GENIE.Platform%3DDesktop)\n- [Firefox](https://support.mozilla.org/en-US/kb/push-notifications-firefox)\n- [Safari](https://www.pushengage.com/safari-push-notifications/)"
            )
          }
        } catch (error) {
          console.log(`error`, error)
        }
      }

      requestPermission()
    }
  }, [token])

  useEffect(() => {
    const unsubscribe = messaging.onMessage(({ notification }) => {
      console.log('A notification has arrived:', notification)
      toast(`title: ` + notification.title)
      toast(`body: ` + notification.body)
    })

    return unsubscribe
  }, [])

  return (
    <Suspense fallback={<Loader />}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route index path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route end path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default UserRoutes
