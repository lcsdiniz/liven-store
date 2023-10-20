import { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { getProducts } from "../../services/products";
import { Product } from "../../types/product";
import { ProductCard } from "../../components/ProductCard";
import SearchInput from "../../components/SearchInput";
import { Container, Header } from "./styles";
import CartButton from "../../components/CartButton";

export function Home() {
    const [productsList, setProductsList] = useState<Product[]>([])
    const [search, setSearch] = useState("")
    
    async function fetchProducts() {
        const response = await getProducts()
        setProductsList(response)
    }
    
    useEffect(() => {
        fetchProducts()
    } , [])

    function filterProducts(products: Product[]) {
		if(search !== '') {
			return products.filter(product => 
				product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
			)
		} else {
			return products
		}
	}

    return (
        <View>
            <Header>
                <SearchInput value={search} onChangeText={setSearch} />

                <CartButton />
            </Header>
            
            {productsList.length === 0 ? (
                <View>
                    <Text>No products</Text>
                </View>
            ) : (
                <ScrollView>
                    <Container>
                        {productsList.map(product => (
                            <ProductCard
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                            />
                    ))}
                    </Container>
                </ScrollView>
            )}
        </View>
    )
}