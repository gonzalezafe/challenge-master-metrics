import React, { useEffect, useState } from 'react';
import { Stack, Text } from '@chakra-ui/react';

interface ProductUrl {
	productUrl: string;
}

const ResultHeader: React.FC<ProductUrl> = ({ productUrl }) => {
	const [categories, setCategories] = useState([]);

	const [error, setError] = useState<Error>();

	useEffect(() => {
		fetch(productUrl)
			.then((response: Response) => response.json())
			.then((data) => {
				setCategories(data.categories);
			})
			.catch((error: Error) => {
				// Guardamos el error en una variable
				console.log('error', error);
				setError(error);
			});
	}, [productUrl]);

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
				<Text fontSize="14px">{categories?.join(' > ')}</Text>
			</Stack>
		</>
	);
};

export default ResultHeader;
