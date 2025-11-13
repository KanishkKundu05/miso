import { Restaurant } from '@/constants/restaurants';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import React, { forwardRef, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface RestaurantBottomSheetProps {
  restaurant: Restaurant | null;
}

export const RestaurantBottomSheet = forwardRef<BottomSheetModal, RestaurantBottomSheetProps>(
  ({ restaurant }, ref) => {
    const colorScheme = useColorScheme();
    const snapPoints = useMemo(() => ['50%', '85%'], []);

    const renderBackdrop = (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    );

    const backgroundColor = Colors[colorScheme ?? 'light'].background;

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        backgroundStyle={{ backgroundColor }}
        handleIndicatorStyle={{ backgroundColor: Colors[colorScheme ?? 'light'].text }}
      >
        {restaurant ? (
          <BottomSheetScrollView style={styles.contentContainer}>
            <Image
              source={restaurant.imagePath}
              style={styles.image}
              contentFit="cover"
            />
            
            <ThemedView style={styles.infoContainer}>
              <ThemedText type="title" style={styles.title}>
                {restaurant.name}
              </ThemedText>
              
              <ThemedText style={styles.visitCount}>
                {restaurant.visits.length === 0
                  ? "Not visited yet"
                  : `Visited ${restaurant.visits.length} ${restaurant.visits.length === 1 ? 'time' : 'times'}`}
              </ThemedText>

              <ThemedText style={styles.description}>
                {restaurant.description}
              </ThemedText>

              {restaurant.visits.length > 0 && (
                <>
                  <ThemedText type="subtitle" style={styles.visitsTitle}>
                    Visit History
                  </ThemedText>

                  {restaurant.visits.map((visit) => (
                    <ThemedView key={visit.id} style={styles.visitCard}>
                      <View style={styles.visitHeader}>
                        <ThemedText style={styles.visitDate}>
                          {new Date(visit.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </ThemedText>
                        <View style={styles.ratingContainer}>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <ThemedText key={index} style={styles.star}>
                              {index < visit.rating ? '★' : '☆'}
                            </ThemedText>
                          ))}
                        </View>
                      </View>

                      <ThemedText style={styles.visitFood}>
                        🍽️ {visit.foodItems}
                      </ThemedText>

                      <ThemedText style={styles.visitCost}>
                        💰 ${visit.cost.toFixed(2)}
                      </ThemedText>
                    </ThemedView>
                  ))}
                </>
              )}
            </ThemedView>
          </BottomSheetScrollView>
        ) : (
          <View style={styles.emptyContainer} />
        )}
      </BottomSheetModal>
    );
  }
);

RestaurantBottomSheet.displayName = 'RestaurantBottomSheet';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#e0e0e0',
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 8,
  },
  visitCount: {
    fontSize: 16,
    marginBottom: 12,
    opacity: 0.7,
  },
  description: {
    fontSize: 15,
    marginBottom: 24,
    lineHeight: 22,
  },
  visitsTitle: {
    marginBottom: 16,
    fontSize: 20,
  },
  visitCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.2)',
  },
  visitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  visitDate: {
    fontSize: 14,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  star: {
    fontSize: 16,
    color: '#FFD700',
  },
  visitFood: {
    fontSize: 15,
    marginBottom: 8,
    lineHeight: 20,
  },
  visitCost: {
    fontSize: 15,
    fontWeight: '600',
  },
});

