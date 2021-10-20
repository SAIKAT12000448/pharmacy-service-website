import { useEffect, useState } from "react"
import initializeAuthentication from "./firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged ,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,updateProfile ,GithubAuthProvider} from "firebase/auth";

initializeAuthentication();
const useFirebase=()=>{
    const[user,setuser]=useState({});
    const[error,seterror]=useState('');
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[islogin,setislogin]=useState(false)
    const[isloading,setisloading]=useState(true);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();
    const signInusingGoogle=()=>{
     
  return   signInWithPopup(auth, googleProvider)
        
  .finally(()=>setisloading(false))
       .catch(error=>{
            seterror(error.message)
            
        })
       
    }
    const signinusingGithub=()=>{
        
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            setuser(result.user)
            console.log(result.user)
        })
        .catch(error=>{
            seterror(error.message)
        })
        
    }
    
    
    useEffect(()=>{
        onAuthStateChanged(auth,user =>{
            if(user){
                setuser(user)
            }
            
        })
    },[])
    //   logOut
    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setuser({})
        })
        .finally(()=>setisloading(false))
    }
    
    // Register
const handleRegister=e=>{
    e.preventDefault();

    if(password.length<6){
        seterror('password should be at least 6 character long');
        return;
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        seterror('password should be at list one uppercase')
    }
  islogin? processLogin(email,password):newRegister(email,password)
    
}
const processLogin=(email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(result=>{
        console.log(result.user)
        setuser(result.user)
        seterror('')
    })
    .finally(()=>setisloading(false))
    .catch(error=>{
        seterror(error.message)
    })
}

const newRegister=(email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
       console.log(result.user)
       setuser(result.user)
        emailVerification()
       newUser()
        seterror('')
    })
    .catch(error=>{
        seterror(error.message)
    })
    // console.log(name,email,password)
}
const newUser=()=>{
    updateProfile(auth.currentUser, {
        displayName: name
      })
      .then(()=>{
       
      })
      .finally(()=>setisloading(false))
     
}

const emailVerification=()=>{
    sendEmailVerification(auth.currentUser)
    .then(result=>{
        console.log(result.user)
    })
    .finally(()=>setisloading(false))
    .catch(error=>{
        seterror(error.message)
    })
}

const namevalue=e=>{
    setname(e.target.value)
}
const emailvalue=e=>{
    setemail(e.target.value)
}
const handlepassword=e=>{
    setpassword(e.target.value)
}
const handlecheck=e=>{
    setislogin(e.target.checked);
}



    return{
        signInusingGoogle,
        user,
        error,
        logOut,
        handleRegister,
        namevalue,emailvalue,handlepassword,
        name,
        email,
        password,islogin,
        handlecheck,
        signinusingGithub,
        isloading,setuser
    }

}

export default useFirebase;