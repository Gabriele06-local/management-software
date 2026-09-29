import type { OrderData } from "@/types/order.types";
import type { SalesData } from "@/types/sales.types";

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

function getYearMonth(dateStr: string): { year: number; month: number } {
  const [year, month] = dateStr.split("-").map(Number);
  return { year, month: month - 1 };
}

export function buildSalesData(orders: OrderData[]): SalesData[] {
  const validOrders = orders.filter((order) => order.orderStatus !== "cancelled");
  const now = new Date();

  const months: SalesData[] = [];
  for (let i = 11; i >= 0; i--) {
    const monthDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();

    const total = validOrders
      .filter((order) => {
        const orderYearMonth = getYearMonth(order.date);
        return orderYearMonth.year === year && orderYearMonth.month === month;
      })
      .reduce((sum, order) => sum + order.totalAmount, 0);

    months.push({ month: MONTH_LABELS[month], value: Math.round(total) });
  }

  return months;
}
