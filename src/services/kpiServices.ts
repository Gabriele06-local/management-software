import { getOrderData } from "@/services/orderServices";
import { buildKpiData } from "@/utils/kpi";
import type { KpiData } from "@/types/kpi.types";

export async function getKpiData(): Promise<KpiData[]> {
  const orders = await getOrderData();
  return buildKpiData(orders);
}

// Funzione per quando collegheremo un vero backend

// export async function getKpiData(): Promise<KpiData[]> {
//   const response = await fetch("http://localhost:3000/api/kpi")
//   const data = await response.json()
//   return data as KpiData[]
// }
