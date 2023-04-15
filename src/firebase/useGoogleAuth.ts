import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { IUser } from '../types/IUser';
import app from './app';
import { FirebaseContext } from './FirebaseContext';

type AuthCallback = () => void

export function useGoogleAuth(): [IUser | null, AuthCallback] {
    const [user, setUser] = useState<IUser | null>(null)

    const firebase = useContext(FirebaseContext)
    const db = getFirestore(firebase)

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)

    auth.useDeviceLanguage()

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userRef = doc(db, 'users', user.uid)
                const userSnap = await getDoc(userRef)

                if (userSnap.exists()) {
                    await setDoc(userRef, { lastLogin: new Date() }, { merge: true })
                    const userData = userSnap.data() as IUser
                    setUser(userData)
                    return
                }

                const userObj: IUser = {
                    uid: user.uid,
                    role: 'user',
                    lastLogin: new Date(),
                    displayName: user.displayName
                }
                await setDoc(userRef, userObj)
                setUser(userObj)

            }
        });
    }, [])

    return [user, () => signInWithPopup(auth, provider)]
}
