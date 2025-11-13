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
            id: "ichiran",
            coordinates: {
              latitude: 40.7478,
              longitude: -73.9884,
            },
            title: "Ichiran",
          },
          {
            id: "kyuramen",
            coordinates: {
              latitude: 40.7580,
              longitude: -73.9855,
            },
            title: "Kyuramen",
          },
          {
            id: "kogane",
            coordinates: {
              latitude: 40.6995,
              longitude: -73.9934,
            },
            title: "Kogane",
          },
          {
            id: "kebab-aur-sharab",
            coordinates: {
              latitude: 40.7794,
              longitude: -73.9832,
            },
            title: "Kebab aur Sharab",
          },
          {
            id: "zuma",
            coordinates: {
              latitude: 40.7516,
              longitude: -73.9795,
            },
            title: "Zuma",
          },
          {
            id: "the-beekman",
            coordinates: {
              latitude: 40.7113,
              longitude: -74.0077,
            },
            title: "The Beekman",
          },
          {
            id: "mr-taka-ramen",
            coordinates: {
              latitude: 40.7215,
              longitude: -73.9880,
            },
            title: "Mr. Taka Ramen",
          },
          {
            id: "kanyakumari",
            coordinates: {
              latitude: 40.7370,
              longitude: -73.9900,
            },
            title: "Kanyakumari",
          },
          {
            id: "st-ambroeus",
            coordinates: {
              latitude: 40.7352,
              longitude: -74.0055,
            },
            title: "St. Ambroeus",
          },
          {
            id: "boqueria",
            coordinates: {
              latitude: 40.7406,
              longitude: -73.9935,
            },
            title: "Boqueria",
          },
          {
            id: "dhamaka",
            coordinates: {
              latitude: 40.7180,
              longitude: -73.9885,
            },
            title: "Dhamaka",
          },
          {
            id: "bungalow",
            coordinates: {
              latitude: 40.7223,
              longitude: -73.9880,
            },
            title: "Bungalow",
          },
          {
            id: "la-pecora-bianca",
            coordinates: {
              latitude: 40.7430,
              longitude: -73.9895,
            },
            title: "La Pecora Bianca",
          },
          {
            id: "eataly-flatiron",
            coordinates: {
              latitude: 40.7411,
              longitude: -73.9897,
            },
            title: "Eataly Flatiron",
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
