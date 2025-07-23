import { CustomButtonProps } from '@/type'
import cn from "clsx"
import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

export default function CustomButton(
    {
        isLoading=false,
        leftIcon,
        onPress,
        style,
        textStyle,
        title="Click Me"
    }:CustomButtonProps
) {

  return (
    <TouchableOpacity disabled={isLoading} className={cn("bg-primary rounded-full p-3 w-full flex flex-row justify-center",style)} onPress={onPress}>
      {leftIcon}
      <View className='flex justify-center items-center flex-row'>
            {
                isLoading?(
                    <ActivityIndicator size={"small"} color={"white"} />
                ):(
                    <Text className={cn("text-white-100 text-lg font-quicksand-semibold",textStyle)}>{title}</Text>
                )
            }
      </View>
      
    </TouchableOpacity>
  )
}