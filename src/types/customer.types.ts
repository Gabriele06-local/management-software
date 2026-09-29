import type { OrderData } from "./order.types";

export type Customer = {
  customerName: string;
  email: string;
  ordersCount: number;
  totalSpent: number;
  lastOrderDate: string;
  orders: OrderData[];
};
