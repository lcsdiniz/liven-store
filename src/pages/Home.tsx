import { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getProducts } from "../services/products";
import { Product } from "../types/product";
import { ProductCard } from "../components/ProductCard";

export function Home() {
    const [productsList, setProductsList] = useState<Product[]>([])

    async function fetchProducts() {
        const response = await getProducts()
        setProductsList(response)
    }
    
    useEffect(() => {
        fetchProducts()
    } , [])

    return (
        <View>
            {productsList.length === 0 ? (
                <View>
                    <Text>Sem produtos</Text>
                </View>
            ) : (
                <View>
                    {productsList.map(product => (
                        <ProductCard
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                        />
                    ))}
                </View>
            )}
        </View>
    )
}