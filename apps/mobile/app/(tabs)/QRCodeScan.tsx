import React, { useState, useRef } from "react";
import { Stack } from "expo-router";
import Corner from '@/components/ui/HeatProComponents/Corner';
import { SafeAreaView, View, Text, StyleSheet, Image, Pressable } from "react-native";
import {CameraView } from 'expo-camera';
import CustomText from "@/components/ui/CustomText";


export default function QrScan({navigation}) {
  const leftUpCorner = require('@/assets/images/leftUpCorner.png');
  const leftDownCorner = require('@/assets/images/leftDownCorner.png');
  const rightUpCorner = require('@/assets/images/rightUpCorner.png');
  const rightDownCorner = require('@/assets/images/rightDownCorner.png');

  const [qrCodeRes, setQrCodeRes] = useState("QR Code Data");

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Overview", headerShown: false }} />
      <Pressable
      onPress={()=>navigation.navigate('ScanQRCode')}
      style={styles.textContainer}>
        <Image
        source={require('@/assets/images/LeftArrow.png')} />
        <CustomText text="Scan QR Code Machine"></CustomText>
      </Pressable>
      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          onBarcodeScanned={(data) => {
              if (data) {
                setQrCodeRes(data.data);
                console.log("Barcode scanned:", qrCodeRes);
              }
            }
          }
        />
        <Corner imgSource={rightUpCorner} style={styles.rightUp}/>
        <Corner imgSource={leftUpCorner} style={styles.leftUp}/>
        <Corner imgSource={leftDownCorner} style={styles.leftDown}/>
        <Corner imgSource={rightDownCorner} style={styles.rightDown}/>
      </View>
      <CustomText text="Placez le QR Code à scanner dans le cadre ci-dessus"></CustomText>
      <CustomText style={{marginTop:'10%'}} text={`Data : ${qrCodeRes}`}></CustomText>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F4F5F880',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: "15%",
  },
  cameraContainer: {
    width: '70%',
    height: '40%',
    marginBottom: "20%",
    marginTop: "15%",
  },
  camera:{
    flex:1
  },
  leftUp:{
    top:0,
    left:-1,
  },
  leftDown:{
    bottom:0,
    left:-1,
  },
  rightUp:{
    top:0,
    right:-3,
  },
  rightDown:{
    bottom:0,
    right:-3,
  },
});