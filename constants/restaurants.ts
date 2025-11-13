export interface Visit {
  id: string;
  date: string;
  rating: number; // 1-5 stars
  foodItems: string;
  cost: number;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  imagePath: string;
  visits: Visit[];
}

// Sample restaurant data with visits
export const RESTAURANTS: Record<string, Restaurant> = {
  "ichiran": {
    id: "ichiran",
    name: "Ichiran",
    description: "Famous Japanese ramen chain known for their tonkotsu ramen",
    coordinates: {
      latitude: 40.7478,
      longitude: -73.9884,
    },
    imagePath: require("@/assets/images/restaurants/ichiran.jpg"),
    visits: [
      {
        id: "ichiran-visit-1",
        date: "2024-11-01",
        rating: 5,
        foodItems: "Tonkotsu Ramen, Extra Noodles",
        cost: 25.50,
      },
      {
        id: "ichiran-visit-2",
        date: "2024-10-15",
        rating: 5,
        foodItems: "Tonkotsu Ramen with Extra Garlic",
        cost: 24.00,
      },
    ],
  },
  "kyuramen": {
    id: "kyuramen",
    name: "Kyuramen",
    description: "Modern ramen spot with creative flavors",
    coordinates: {
      latitude: 40.7580,
      longitude: -73.9855,
    },
    imagePath: require("@/assets/images/restaurants/kyuramen.jpg"),
    visits: [
      {
        id: "kyuramen-visit-1",
        date: "2024-10-20",
        rating: 4,
        foodItems: "Spicy Miso Ramen, Gyoza",
        cost: 32.00,
      },
    ],
  },
  "kogane": {
    id: "kogane",
    name: "Kogane",
    description: "Authentic Japanese curry and comfort food",
    coordinates: {
      latitude: 40.6995,
      longitude: -73.9934,
    },
    imagePath: require("@/assets/images/restaurants/kogane.jpg"),
    visits: [
      {
        id: "kogane-visit-1",
        date: "2024-11-05",
        rating: 4,
        foodItems: "Katsu Curry, Green Tea",
        cost: 18.50,
      },
      {
        id: "kogane-visit-2",
        date: "2024-09-28",
        rating: 5,
        foodItems: "Chicken Curry, Rice",
        cost: 16.00,
      },
      {
        id: "kogane-visit-3",
        date: "2024-08-12",
        rating: 4,
        foodItems: "Vegetable Curry",
        cost: 15.00,
      },
    ],
  },
  "kebab-aur-sharab": {
    id: "kebab-aur-sharab",
    name: "Kebab aur Sharab",
    description: "Upscale Indian cuisine with modern twists",
    coordinates: {
      latitude: 40.7794,
      longitude: -73.9832,
    },
    imagePath: require("@/assets/images/restaurants/kebab.jpg"),
    visits: [
      {
        id: "kebab-visit-1",
        date: "2024-10-30",
        rating: 5,
        foodItems: "Lamb Kebabs, Naan, Biryani",
        cost: 65.00,
      },
    ],
  },
  "zuma": {
    id: "zuma",
    name: "Zuma",
    description: "Contemporary Japanese izakaya-style dining",
    coordinates: {
      latitude: 40.7516,
      longitude: -73.9795,
    },
    imagePath: require("@/assets/images/restaurants/zuma.jpg"),
    visits: [],
  },
  "the-beekman": {
    id: "the-beekman",
    name: "The Beekman",
    description: "Elegant New American restaurant in historic hotel",
    coordinates: {
      latitude: 40.7113,
      longitude: -74.0077,
    },
    imagePath: require("@/assets/images/restaurants/beekman.jpg"),
    visits: [
      {
        id: "beekman-visit-1",
        date: "2024-09-15",
        rating: 5,
        foodItems: "Steak, Truffle Fries, Wine",
        cost: 120.00,
      },
    ],
  },
  "mr-taka-ramen": {
    id: "mr-taka-ramen",
    name: "Mr. Taka Ramen",
    description: "Cozy neighborhood ramen shop",
    coordinates: {
      latitude: 40.7215,
      longitude: -73.9880,
    },
    imagePath: require("@/assets/images/restaurants/placeholder.jpg"),
    visits: [],
  },
  "kanyakumari": {
    id: "kanyakumari",
    name: "Kanyakumari",
    description: "South Indian vegetarian restaurant",
    coordinates: {
      latitude: 40.7370,
      longitude: -73.9900,
    },
    imagePath: require("@/assets/images/restaurants/placeholder.jpg"),
    visits: [],
  },
  "st-ambroeus": {
    id: "st-ambroeus",
    name: "St. Ambroeus",
    description: "Italian cafe and restaurant",
    coordinates: {
      latitude: 40.7352,
      longitude: -74.0055,
    },
    imagePath: require("@/assets/images/restaurants/placeholder.jpg"),
    visits: [],
  },
  "boqueria": {
    id: "boqueria",
    name: "Boqueria",
    description: "Spanish tapas bar and restaurant",
    coordinates: {
      latitude: 40.7406,
      longitude: -73.9935,
    },
    imagePath: require("@/assets/images/restaurants/placeholder.jpg"),
    visits: [],
  },
  "dhamaka": {
    id: "dhamaka",
    name: "Dhamaka",
    description: "Regional Indian cuisine with bold flavors",
    coordinates: {
      latitude: 40.7180,
      longitude: -73.9885,
    },
    imagePath: require("@/assets/images/restaurants/placeholder.jpg"),
    visits: [],
  },
  "bungalow": {
    id: "bungalow",
    name: "Bungalow",
    description: "Contemporary Indian restaurant",
    coordinates: {
      latitude: 40.7223,
      longitude: -73.9880,
    },
    imagePath: require("@/assets/images/restaurants/placeholder.jpg"),
    visits: [],
  },
  "la-pecora-bianca": {
    id: "la-pecora-bianca",
    name: "La Pecora Bianca",
    description: "Rustic Italian restaurant and market",
    coordinates: {
      latitude: 40.7430,
      longitude: -73.9895,
    },
    imagePath: require("@/assets/images/restaurants/placeholder.jpg"),
    visits: [],
  },
  "eataly-flatiron": {
    id: "eataly-flatiron",
    name: "Eataly Flatiron",
    description: "Italian marketplace with multiple dining options",
    coordinates: {
      latitude: 40.7411,
      longitude: -73.9897,
    },
    imagePath: require("@/assets/images/restaurants/placeholder.jpg"),
    visits: [],
  },
};

