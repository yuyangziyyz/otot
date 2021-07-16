import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Title } from "react-native-paper";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio/Sound";
import { Recording } from "expo-av/build/Audio/Recording";

 function RecordingScreen() {
  const [sound, setSound] = useState<Sound>();
  const [recording, setRecording] = useState<Recording>();
  const [recordUri, setRecordUri] = useState("");



  const onStartRecord = async () => {
    try {
      console.log("Requesting permission...");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      });
      console.log("Starting recording...");
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      console.log("Record started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };
  const onStopRecord = async () => {
    console.log("Stopping recording...");
    setRecording(undefined);
    await recording?.stopAndUnloadAsync();
    const uri = recording?.getURI();
    setRecordUri(uri ? uri : "");
    console.log("Recording stopped and stored at", uri);
  };
  const onPlayRecord = async () => {
    console.log("Loading record");
    console.log(recordUri);
    const {sound} = await Audio.Sound.createAsync({uri: recordUri});
    setSound(sound);
    await sound?.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
        console.log("Unloading sound");
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


  return (
    <Card style={styles.card}>
      <Title>録音</Title>
      <Button mode="contained" icon="record" onPress={() => onStartRecord()}>
        録音
      </Button>
      <Button
        icon="stop"
        mode="outlined"
        onPress={() => onStopRecord()}
      >
        ストップ
      </Button>
      <Button
        icon="stop"
        mode="outlined"
        onPress={() => onPlayRecord()}
      >
        再生
      </Button>

    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    paddingHorizontal: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  }
});

// function RecordingScreen({navigation}) {
//     return (
//       <View style={styles.container}>
//         <Text>Recording</Text>
//         <Button 
//            title = "goto details"
//            onPress ={() => navigation.navigate("Details")}
//         />
//       </View>
//     );
//   };

  export default RecordingScreen;
