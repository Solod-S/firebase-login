import { auth, provider, fsbase } from 'fBase/fBase'

async function googleLogIn(credentials) {
  try {
    const { user } = await auth.signInWithPopup(provider)
    const { email, displayName, photoURL, uid } = user
    const userDoc = await findUserByEmail(email)
    if (userDoc) {
      let userData = userDoc.data()
      return userData
    } else {
      return await handleNewUser(email, '123456', photoURL, displayName, uid)
    }
  } catch (error) {
    throw new Error('Failed to log in')
  }
}

async function emailLogIn({ email, password }) {
  try {
    await auth.signInWithEmailAndPassword(email, password)
    const userDoc = await findUserByEmail(email)

    const userData = userDoc.data()

    return userData
  } catch (error) {
    throw Error(error)
  }
}

async function emailSignUp({ email, password }) {
  try {
    return await handleNewUser(email, password)
  } catch (error) {
    throw new Error(error)
  }
}

async function logOut() {
  try {
    await auth.signOut()
  } catch (error) {
    throw new Error('Failed to log out')
  }
}

async function handleNewUser(email, password, userPhotoURL, name, uid) {
  if (uid) {
    const newUser = {
      owner_uid: uid,
      email: email,
      displayName: name ? name : '',
      photoURL: userPhotoURL,
      subscription: 'Free',
      gender: 'Other',
    }

    fsbase.collection('users').add(newUser)

    return newUser
  } else {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    )
    const { user } = userCredential

    await user.updateProfile({
      photoURL: userPhotoURL ? userPhotoURL : null,
      displayName: name ? name : '',
    })

    const { uid, displayName, photoURL } = user

    const newUser = {
      owner_uid: uid,
      email: email,
      displayName: displayName ? displayName : '',
      photoURL,
      subscription: 'Free',
      gender: 'Other',
    }

    fsbase.collection('users').add(newUser)

    return newUser
  }
}

async function updateUserData(data) {
  try {
    const userDoc = await findUserByEmail(data.email)

    if (userDoc) {
      const userData = userDoc.data()
      const updatedUserData = { ...userData, ...data }

      await userDoc.ref.update(updatedUserData)

      return updatedUserData
    } else {
      throw new Error('Пользователь с таким email не найден.')
    }
  } catch (error) {
    throw new Error(error)
  }
}

async function findUserByEmail(email) {
  try {
    const querySnapshot = await fsbase
      .collection('users')
      .where('email', '==', email)
      .get()

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0]
    } else {
      return null
    }
  } catch (error) {
    throw new Error(error)
  }
}

export {
  googleLogIn,
  logOut,
  emailLogIn,
  emailSignUp,
  handleNewUser,
  updateUserData,
}
