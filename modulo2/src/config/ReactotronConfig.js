import Reactotron from "reactotron-react-native";

//192.168.25.2:19000
if (__DEV__) {
  const tron = Reactotron.configure({ host: "192.168.25.2", port: 9090 })
    .useReactNative()
    .connect();

  console.tron = tron;
  tron.clear();
}
