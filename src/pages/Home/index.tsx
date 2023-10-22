import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { getProducts } from "../../services/products";
import { Product } from "../../types/product";
import { ProductCard } from "../../components/ProductCard";
import SearchInput from "../../components/SearchInput";
import { Header } from "./styles";
import CartButton from "../../components/CartButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RootStackParamList from "../../types/rootStackParamList";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation }: Props) {
    const [productsList, setProductsList] = useState<Product[]>([])
    const [search, setSearch] = useState("")
    
    async function fetchProducts() {
        const response = await getProducts()
        setProductsList(response)
    }
    
    useEffect(() => {
        fetchProducts()
    } , [])

    function navigateToCart() {
        navigation.navigate('Cart')
    }

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
        <View style={{ flex: 1 }}>
            <Header>
                <SearchInput value={search} onChangeText={setSearch} />

                <CartButton navigate={navigateToCart}/>
            </Header>
            
            {productsList.length === 0 ? (
                <View>
                    <Text>No products</Text>
                </View>
            ) : (
                <FlatList
                    data={filterProducts(productsList)}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ProductCard
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                    )}
                    columnWrapperStyle={{ gap: 8, justifyContent: 'space-evenly' }}
                    contentContainerStyle={{ gap: 16, padding: 8 }}
                />
            )}
        </View>
    )
}