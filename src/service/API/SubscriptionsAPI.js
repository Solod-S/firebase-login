import { fsbase } from 'fBase/fBase'

async function fetchSubscription(credentials) {
  try {
    const snapshot = await fsbase.collection('subscriptions').get()
    const subscriptionData = snapshot.docs.map(doc => doc.data())

    return subscriptionData
  } catch (error) {
    throw new Error('Failed to fetch subscription')
  }
}
export { fetchSubscription }
