import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { signIn } from '@/lib/appwrite'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'

function SignInPage() {
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email:"",
    password:""
  })

  async function submit() {
    if(!form.email || !form.password) return Alert.alert("Error","Please enter valid email address & password");
    setIsSubmitting(true);
    try{

      await signIn({
        email:form.email,
        password:form.password
      })

      router.replace("/");
    }catch(error:any){
      Alert.alert("Error",error.message);
    }finally{
      setIsSubmitting(false);
    }
  }

  return (
    <View className='gap-5 bg-white rounded-lg p-5 mt-5'>
      <CustomInput 
        placeholder='Enter your email'
        value={form.email}
        onChangeText={(text)=>setForm((prev)=>({...prev,email:text}))}
        label='Email'
        keyboardType='email-address'
      />
      <CustomInput 
        placeholder='Enter your password'
        value={form.password}
        onChangeText={(text)=>setForm((prev)=>({...prev,password:text}))}
        label='Password'
        secureTextEntry
      />
      <CustomButton 
        title='Sign In'
        isLoading={isSubmitting}
        onPress={submit}
      />
      <View className='flex flex-row justify-center gap-2'>
        <Text className='text-lg font-quicksand text-gray-100'>
          Don't have an account?
        </Text>
        <Link href={"/sign-up"} className='text-xl font-quicksand-bold text-primary'>
          Sign Up
        </Link>
      </View>
    </View>
  )
}

export default SignInPage
