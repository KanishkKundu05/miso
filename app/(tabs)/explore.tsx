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
        markers={[
          {
            coordinates: {
              latitude: 40.7478,
              longitude: -73.9884,
            },
            title: "Ichiran",
          },
        ]}
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
