import { router } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

function SignInPage() {
  return (
    <View>
        <Text>Sign in</Text>
        <Button title='Sign up' onPress={()=>router.push("/sign-up")} />
    </View>
  )
}

export default SignInPage
