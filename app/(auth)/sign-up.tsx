import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { createUser } from '@/lib/appwrite'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'

function SignUpPage() {
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name:"",
    email:"",
    password:""
  })

  async function submit() {
    if(!form.name || !form.email || !form.password) return Alert.alert("Error","Please enter valid email address & password");
    setIsSubmitting(true);
    try{
      await createUser({
        email:form.email,
        name:form.name,
        password:form.password
      })

      router.replace("/")
    }catch(error:any){
      Alert.alert("Error",error.message);
    }finally{
      setIsSubmitting(false);
    }
  }

  return (
    <View className='gap-5 bg-white rounded-lg p-5 mt-5'>
      <CustomInput 
        placeholder='Enter your name'
        value={form.name}
        onChangeText={(text)=>setForm((prev)=>({...prev,name:text}))}
        label='Name'
        keyboardType='default'
      />
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
        title='Sign Up'
        isLoading={isSubmitting}
        onPress={submit}
      />
      <View className='flex flex-row justify-center gap-2'>
        <Text className='text-lg font-quicksand text-gray-100'>
           Already have an account?
        </Text>
        <Link href={"/sign-in"} className='text-xl font-quicksand-bold text-primary'>
          Sign In
        </Link>
      </View>
    </View>
  )
}

export default SignUpPage