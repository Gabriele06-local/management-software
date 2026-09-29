import type { Customer } from "@/types/customer.types";
import type { OrderData } from "@/types/order.types";

export function buildCustomers(orders: OrderData[]): Customer[] {
  const validOrders = orders.filter((order) => {
    return order.orderStatus !== "cancelled";
  });
  const groups: Record<string, OrderData[]> = {};
  for (const order of validOrders) {
    if (!groups[order.email]) {
      groups[order.email] = [];
    }
    groups[order.email].push(order);
  }
  return Object.values(groups).map((group) => {
    return {
      customerName: group[0].customerName,
      email: group[0].email,
      ordersCount: group.length,
      lastOrderDate: group.reduce((latest, order) => {
        return order.date > latest ? order.date : latest;
      }, group[0].date),
      totalSpent: group.reduce((total, order) => {
        return total + order.totalAmount;
      }, 0),
      orders: group,
    };
  });
}
