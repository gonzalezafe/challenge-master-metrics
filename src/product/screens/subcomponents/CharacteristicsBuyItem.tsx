import { Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import formatPrice from "../../../utils/formatPrice";
import { Product } from "../../types";

interface CharacteristicsProps {
	productId: Product;
}

const CharacteristicsBuyItem: React.FC<CharacteristicsProps> = ({ productId }) => {
	return (
		<>
			<Stack paddingInlineStart="40px" maxWidth="400px">
				<Text color="blackAlpha.700">
					{productId.condition} | {productId.sold_quantity} vendidos{" "}
				</Text>
				<Text fontSize="22px" fontWeight="600">
					{productId.title}
				</Text>
				<Text fontSize="36px" fontWeight="300">
					{formatPrice(productId.price?.amount)}
				</Text>
				<Stack paddingBlockStart={8}>
					<Button bg="blue.400" color="white">
						Comprar
					</Button>
				</Stack>
			</Stack>
		</>
	);
};

export default CharacteristicsBuyItem;
