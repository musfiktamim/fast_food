import { CustomInputProps } from '@/type'
import cn from "clsx"
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

export default function CustomInput(
    {
        placeholder="Enter Text",
        value,
        onChangeText,
        label,
        secureTextEntry = false,
        keyboardType = "default"
    }: CustomInputProps
) {

    const [isFocused,setIsFocused] = useState(false)

  return (
    <View className='w-full'>
      <Text className='text-base text-start w-full font-quicksand-medium text-gray-500 pl-2'>{label}</Text>
      <TextInput 
      autoCapitalize='none'
      autoCorrect={false}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      onFocus={()=>setIsFocused(true)}
      onBlur={()=>setIsFocused(false)}
      placeholder={placeholder}
      placeholderTextColor={"#888"}
      className={cn("rounded-lg p-3 w-full text-base font-quicksand-semibold text-dark-100 border-b leading-5",isFocused?"border-primary":"border-gray-300")}
      />
    </View>
  )
}