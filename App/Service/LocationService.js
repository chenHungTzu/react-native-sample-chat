import { DeviceEventEmitter } from "react-native";

export const StartLocationListener = () => {

  console.log("[START] GEO_LOCATION LISTENER")

  if (!this.evEmitter) {
    this.evEmitter = DeviceEventEmitter.addListener("updateLocation", e => {
      console.log(e);
    });
  }
};
