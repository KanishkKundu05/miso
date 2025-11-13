import { AppleMaps } from 'expo-maps';
import { StyleSheet, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <AppleMaps.View
        style={styles.map}
        cameraPosition={{
          coordinates: {
            latitude: 40.7128,
            longitude: -74.0060,
          },
          zoom: 12,
        }}
        properties={{
          isMyLocationEnabled: true,
        }}
        uiSettings={{
          myLocationButtonEnabled: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
