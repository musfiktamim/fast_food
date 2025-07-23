import CardButton from "@/components/CardButton";
import { images, offers } from "@/constants";
import cn from "clsx";
import React, { Fragment } from "react";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 
export default function App() {
  return (<SafeAreaView className="flex-1 bg-white">

    <FlatList
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    data={offers}
    renderItem={({item,index})=>{
        const isEven = index % 2 == 0;
        return <View>
        <Pressable android_ripple={{color:"#fffff22"}} className={cn(`w-full h-48 my-3 rounded-xl overflow-hidden shadow-lg flex items-center gap-5`,isEven?"flex-row-reverse":"flex-row")} style={{backgroundColor:`${item.color}`}}>
            {({pressed})=>{
                return <Fragment>
                    <View className="h-full w-1/2">
                    <Image source={item.image} className="size-full" resizeMode="contain" />
                    </View>
                    <View className={cn("flex-1 h-full flex flex-col justify-center items-start gap-4",isEven?"pl-9":"pr-9")}>
                        <Text className="text-3xl font-quicksand-bold text-white leading-tight">{item.title}</Text>
                        <Image source={images.arrowRight} className="size-10" resizeMode="contain" tintColor={"#ffffff"} />
                    </View>
                </Fragment>
            }}
        </Pressable>
    </View>
    }}
    contentContainerClassName="pb-28 px-4"
    ListHeaderComponent={()=>{
        return     <View className="flex items-center justify-between flex-row w-full my-5">
        <View className="flex items-start justify-center">
            <Text className="text-xs font-quicksand-bold text-primary">DELIVER TO</Text>
            <TouchableOpacity className="flex flex-row gap-x-1 mt-0.5">
                <Text className="text-base font-quicksand-bold text-dark-100">Bangladesh</Text>
                <Image source={images.arrowDown} className="size-3" resizeMode="contain" />
            </TouchableOpacity>
        </View>
        <CardButton />
    </View>
    }}
    />
  </SafeAreaView>
  );
}