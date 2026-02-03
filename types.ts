
export enum Category {
  SWEETS = 'Sweets',
  BAKERY = 'Bakery',
  SAVORIES = 'Savories',
  PICKLES = 'Pickles',
}

export interface MenuItem {
  id: string;
  category: Category;
  name: string;
  price: number;
  description: string;
  image: string;
  isVegetarian: boolean;
  rating: number;
  ingredients?: string[];
  available?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export enum OrderStatus {
  PENDING = 'Pending',
  CONFIRMED = 'Confirmed',
  PREPARING = 'Preparing',
  OUT_FOR_DELIVERY = 'Out for Delivery',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'customer';
  token?: string;
  favorites?: string[]; // Array of MenuItem IDs
}

export interface Order {
  id: string; // "SR-XXXX"
  userId?: string;
  customerName: string; // For guest checkout simulation
  items: {
    itemId: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string; // ISO Date
  paymentStatus: 'paid' | 'pending';
}

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  pendingOrders: number;
  popularItem: string;
}
