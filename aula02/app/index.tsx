import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { Camera, CameraType } from "expo-camera";

export default function Index() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Pedindo permissão...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem permissão para usar a câmera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} />
      <Button
        title="Trocar câmera"
        onPress={() =>
          setType(type === CameraType.back ? CameraType.front : CameraType.back)
        }
      />
    </View>
  );
}


