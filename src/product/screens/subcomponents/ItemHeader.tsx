import { Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

interface ProductCatId {
	productCatId: string | undefined;
}

interface Category {
	name: string;
}

const ItemHeader: React.FC<ProductCatId> = ({ productCatId }) => {
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState<Error>();

	useEffect(() => {
		fetch(`https://api.mercadolibre.com/categories/${productCatId}`)
			.then((response: Response) => response.json())
			.then((data) => {
				setCategories(data.path_from_root.map((category: Category) => category.name));
			})
			.catch((error: Error) => {
				// Guardamos el error en una variable
				console.log('error', error);
				setError(error);
			});
	}, [productCatId]);

	return (
		<>
			{error && (
				<>
					<Stack width="100%">
						<Stack bg="red.200">
							<Text>Ocurrió un error, por favor intente nuevamente</Text>
						</Stack>
					</Stack>
				</>
			)}
			<Stack marginBlockEnd={2} paddingBlockStart={5} spacing={5}>
				<Text fontSize="14px">{categories.join(' > ')}</Text>
			</Stack>
		</>
	);
};

export default ItemHeader;
