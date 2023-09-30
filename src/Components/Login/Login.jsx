import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.config';
const auth = getAuth(app)

const Login = () => {
    const [user,setuser]=useState(null)

    const Googleprovider = new GoogleAuthProvider();
    const githubpovider=new GithubAuthProvider()

    const singinwithgoogle = () => {
        signInWithPopup(auth, Googleprovider)
            .then(result => {
                const loginuser = result.user;
                console.log(loginuser);
                setuser(loginuser)
            })
            .catch(error => {
                console.log("error", error.message)
            })

    }
    const signoutgoogle =()=>{

        signOut(auth)
        .then(result=>{
            setuser(null)
            console.log(result)
        }
            )
        .catch(error=>{
            console.log(error)
        })


    }
    const signinGithub=()=>{

    }

    return (
        <div>
            <div className='gap-5'>
            <button className='btn' onClick={singinwithgoogle}>Login</button>
            <button onClick={signoutgoogle}>sign out</button>
            <button onClick={signinGithub}>github login</button>
            </div>
            


            <div>
                {user && <div>
                    {
                        <p className='font-bold text-7xl'>{user.displayName
                        }</p>
                    }
                    </div>


                }
            </div>
        </div>
    );
};

export default Login;