import { Product } from "../types/product";
import api from "./api";

export async function getProducts(): Promise<Product[]> {
	const response = await api.get('products')

	return response.data
}