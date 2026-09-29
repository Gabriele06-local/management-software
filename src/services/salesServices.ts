import { getOrderData } from "@/services/orderServices";
import { buildSalesData } from "@/utils/sales";
import type { SalesData } from "@/types/sales.types";

export async function getSalesData(): Promise<SalesData[]> {
  const orders = await getOrderData();
  return buildSalesData(orders);
}

// Funzione per quando collegheremo un vero backend

// export async function getSalesData(): Promise<SalesData[]> {
//     const response = await fetch("http://localhost:3000/api/sales")
//     const data = await response.json()
//     return data as SalesData[]
// }
