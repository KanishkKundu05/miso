import { RestaurantBottomSheet } from '@/components/restaurant-bottom-sheet';
import { RESTAURANTS, Restaurant } from '@/constants/restaurants';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { AppleMaps } from 'expo-maps';
import { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabTwoScreen() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  // Effect to open the bottom sheet when a restaurant is selected
  useEffect(() => {
    if (selectedRestaurant) {
      console.log('Presenting bottom sheet for:', selectedRestaurant.name);
      bottomSheetRef.current?.present();
    }
  }, [selectedRestaurant]);

  const handleMarkerClick = useCallback((event: { id?: string }) => {
    console.log('Marker clicked:', event);
    if (event.id) {
      const restaurant = RESTAURANTS[event.id];
      if (restaurant) {
        console.log('Setting selected restaurant:', restaurant.name);
        setSelectedRestaurant(restaurant);
      }
    }
  }, []);

  // Fallback: use map click with coordinate matching if marker click doesn't work
  const handleMapClick = useCallback((event: { coordinates: { latitude?: number; longitude?: number } }) => {
    console.log('Map clicked at:', event.coordinates);
    
    if (!event.coordinates.latitude || !event.coordinates.longitude) {
      return;
    }
    
    // Find the closest marker to the click
    const threshold = 0.001; // About 100 meters
    const clickedRestaurant = Object.values(RESTAURANTS).find((restaurant) => {
      const latDiff = Math.abs(restaurant.coordinates.latitude - event.coordinates.latitude!);
      const lonDiff = Math.abs(restaurant.coordinates.longitude - event.coordinates.longitude!);
      return latDiff < threshold && lonDiff < threshold;
    });

    if (clickedRestaurant) {
      console.log('Found restaurant near click:', clickedRestaurant.name);
      setSelectedRestaurant(clickedRestaurant);
    }
  }, []);

  // Test function to open bottom sheet manually
  const testBottomSheet = () => {
    console.log('Test button pressed - opening Ichiran');
    setSelectedRestaurant(RESTAURANTS['ichiran']);
  };

  return (
    <View style={styles.container}>
        {/* Test button to verify bottom sheet works */}
        <TouchableOpacity 
          style={styles.testButton}
          onPress={testBottomSheet}
        >
          <Text style={styles.testButtonText}>Test Bottom Sheet</Text>
        </TouchableOpacity>
        
        <AppleMaps.View
          style={styles.map}
          cameraPosition={{
            coordinates: {
              latitude: 40.7128,
              longitude: -74.0060,
            },
            zoom: 12,
          }}
          onMarkerClick={handleMarkerClick}
          onMapClick={handleMapClick}
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
        <RestaurantBottomSheet
          ref={bottomSheetRef}
          restaurant={selectedRestaurant}
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
  testButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  testButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
