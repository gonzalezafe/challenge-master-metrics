import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface ItemDescription {
	description: string;
}
interface PropProduct {
	productId: ItemDescription | undefined;
}

const ProductDescription: React.FC<PropProduct> = ({ productId }) => {
	console.log('productDescription', productId);
	return (
		<>
			<Stack paddingInlineStart="40px" paddingInlineEnd="500px">
				<Text fontSize="24px" color="black">
					Descripción del producto
				</Text>
				<Text> {productId?.description}</Text>
			</Stack>
		</>
	);
};

export default ProductDescription;
