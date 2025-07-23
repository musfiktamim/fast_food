import { images } from '@/constants';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function CardButton() {
    const totalItem = 10;
  return (
    <TouchableOpacity className='flex items-center justify-center size-10 rounded-full bg-[#00000]' onPress={()=>{}}>
        <Image source={images.bag} tintColor={"#000000"} className='size-5' resizeMode='contain' />
        {totalItem>0 && (
            <View className='absolute -top-2 -right-1 flex items-center justify-center size-5 bg-primary rounded-full'>
                <Text className='text-xs font-quicksand-bold text-white-100'>{totalItem}</Text>
            </View>
        )}
    </TouchableOpacity>
  )
}

export default CardButton
