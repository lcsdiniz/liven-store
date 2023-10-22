import { Product } from "./product";

type RootStackParamList = {
	Home: undefined;
	ProductDetails: { productId: number };
	Cart: undefined;
};

export default RootStackParamList