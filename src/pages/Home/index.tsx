import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getProducts } from "../../services/products";
import { Product } from "../../types/product";
import { Header, Message, NoProductsContainer } from "./styles";
import RootStackParamList from "../../types/rootStackParamList";
import { SearchInput, CartButton, ProductCard, Loading, FilterButton } from "../../components";
import { useFilter } from "../../hooks/useFilter";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation }: Props) {
    const [productsList, setProductsList] = useState<Product[]>([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    
    const { filters } = useFilter();
    
    async function fetchProducts() {
        setLoading(true)
        const response = await getProducts()
        setProductsList(response)
        setLoading(false)
    }
    
    useEffect(() => {
        fetchProducts()
    } , [])

    function navigateToCart() {
        navigation.navigate('Cart')
    }

    function openDrawer() {
        navigation.openDrawer()
    }

    function searchFilter(products: Product[]) {
		if(search !== '') {
			return products.filter(product => 
				product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
			)
		} else {
			return products
		}
	}

    function categoryFilter(products: Product[]) {
		if(filters.length === 0) {
			return products
		} else {
            return products.filter(product => 
				filters.includes(product.category)
			)
		}
	}

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <SearchInput value={search} onChangeText={setSearch} editable={!loading} />

                <FilterButton openDrawer={openDrawer} />

                <CartButton navigate={navigateToCart}/>
            </Header>

            {loading
                ? (
                    <Loading />
                ) : (
                    productsList.length === 0 ? (
                        <NoProductsContainer>
                            <Message>No products were found</Message>
                            <FontAwesome5 name="box-open" size={72} color="black" />
                        </NoProductsContainer>
                    ) : (
                        <FlatList
                            data={categoryFilter(searchFilter(productsList))}
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
                    ) 
                )
            }
        </View>
    )
}