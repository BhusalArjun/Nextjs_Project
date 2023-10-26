import  { useState, useEffect } from 'react'
import React from 'react'

const useThemeSwitcher = () => {
//prefer-color-scheme is css feature for doing dark and light theme 
    const preferDarkQuery = "(prefer-color-scheme: dark )";
    const [mode, setMode] = useState("");
    useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref= window.localStorage.getItem("theme");
// by this setting we will check if there is user setting configuration avaliable through local storage and media query
    const handleChange = () =>{
        //if user is opening this protfolio for first time then there is no variable in local storage so that below if condition will return false and again we will check user preference by else through media query and if there is then we will set accordingly
        if(userPref){
            let check = userPref === "dark" ? "dark" : "light";
            setMode(check);
            if(check==="dark"){
                document.documentElement.classList.add("dark")
            } else{
                document.documentElement.classList.remove("dark")
            }
        } else{
            let check = mediaQuery.matches ? "dark" : "light";
            setMode(check);
            window.localStorage.setItem(
                "theme",
                check
            );
            if(check==="dark"){
                document.documentElement.classList.add("dark")
            } else{
                document.documentElement.classList.remove("dark")
            }
        }
    }
    handleChange();
    mediaQuery.addEventListener("change",handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    //by this effect we will update value in local storage
    useEffect(() => {
        if(mode === "dark"){
            window.localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark")
        }
        if(mode === "light"){
            window.localStorage.setItem("theme","light");
            document.documentElement.classList.remove("dark")
        }
    //soo we will run this effect when there is change in mode state

    }, [mode])

    return [mode,setMode]
}

export default useThemeSwitcher