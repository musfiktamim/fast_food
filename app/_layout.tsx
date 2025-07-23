import { useFonts } from "expo-font"
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from "react"
import "./global.css"

function HomeLayout() {

  const [fontsLoaded,error] = useFonts({
    "Quicksand-Bold":require("@/assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium":require("@/assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Regular":require("@/assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-SemiBold":require("@/assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Light":require("@/assets/fonts/Quicksand-Light.ttf"),
  })

  useEffect(()=>{
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded,error])

  return <Stack screenOptions={{headerShown:false}} />
}

export default HomeLayout;