import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { getCategories } from "../../services/products";
import { useFilter } from "../../hooks/useFilter";
import {
  Container,
  Title,
  Row,
  CategoryItem,
  Name,
  CategoryName,
  Filter,
  Divider,
} from "./styles";
import theme from "../../theme/theme";

export default function Drawer({ navigation }: any) {
  const [categories, setCategories] = useState<string[]>([]);
  const { filters, addFilter } = useFilter();

  async function fetchCategories() {
    const response = await getCategories();
    setCategories(response);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
            <Title>FILTERS</Title>

            <Divider />
            
            <Filter>
                <Name>CATEGORIES</Name>

                <Row>
                    {categories.map((category) => (
                        <CategoryItem
                            key={category}
                            onPress={() => addFilter(category)}
                            style={{borderColor: filters.includes(category) ? theme.colors.primary : "gray"}}
                        >
                            <CategoryName
                                style={{ color: filters.includes(category) ? theme.colors.primary : "gray"}}
                            >
                                {category}
                            </CategoryName>
                        </CategoryItem>
                    ))}
                </Row>
            </Filter>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
