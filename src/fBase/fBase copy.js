import firebase from 'firebase'
const apiKey = process.env.REACT_APP_API_KEY
const { REACT_APP_VAPID_KEY } = process.env
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey,
  authDomain: 'fir-login-5cb73.firebaseapp.com',
  projectId: 'fir-login-5cb73',
  storageBucket: 'fir-login-5cb73.appspot.com',
  messagingSenderId: '836565124543',
  appId: '1:836565124543:web:b5d6acfadc949a45c9cd0a',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const fsbase = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

const messaging = firebase.messaging()

const generateToken = async () => {
  try {
    const permission = await Notification.requestPermission()
    console.log(permission)
    if (permission === 'granted') {
      const token = await messaging.getToken({ vapidKey: REACT_APP_VAPID_KEY })
      console.log(token)
    }
  } catch (error) {
    console.error('Error getting token:', error)
  }
}

export { auth, provider, storage, fsbase }
