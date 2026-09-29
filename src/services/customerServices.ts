import type { Customer } from "@/types/customer.types";
import { getOrderData } from "./orderServices";
import { buildCustomers } from "@/utils/customers";

export async function getCustomerData(): Promise<Customer[]> {
  const orders = await getOrderData();
  return buildCustomers(orders);
}
