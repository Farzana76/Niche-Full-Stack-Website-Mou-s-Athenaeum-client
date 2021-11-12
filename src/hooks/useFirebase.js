import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init.js';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('')
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [useremail, setuserEmail] = useState("");
    const [userpassword, setuserPassword] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const getName = e =>{
        setName(e.target.value);
    }

    const getEmail = e =>{
        setEmail(e.target.value);
    }

    const getPassword = e =>{
        setPassword(e.target.value);
    }

    const userEmail = e => {
        setuserEmail(e.target.value)
    }

    const userPassword = e => {
        setuserPassword(e.target.value)
    }

    const setUserInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            setError(error.message)
          });
    }

    const userRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if(email.length === 0){
            setError("Please enter your email")
            return;
        }
        if(password.length === 0){
            setError("Please enter a password");
            return;
        }
        if(password.length < 6){
            setError("Password should be at least 6 charecters");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUserInfo();
            const user = result.user;
            console.log(user);
            verifyEmail();
            setError('');
            alert("Registration Successful!");
        })
        .catch((error) => {
            setError(error.message);
        })
    }
    
    const signInWithEmail = e => {
        e.preventDefault();
        if(useremail.length === 0){
            setError("Please give your email")
            return;
        }
        if(userpassword.length === 0){
            setError("Please give your password")
            return;
        }
        signInWithEmailAndPassword(auth, useremail, userpassword)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(result.user)
            setError('');
        })
        .catch((error) => {
            setError(error.message);
        })
    }

      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
            console.log(result);
          })
      }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // observe whether user state changed or not
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return { 
        user, 
        error, 
        loading, 
        userRegistration, 
        getName, 
        getEmail, 
        getPassword, 
        userEmail, 
        userPassword, 
        signInWithEmail, 
        signInUsingGoogle, 
        logOut }

}

export default useFirebase;