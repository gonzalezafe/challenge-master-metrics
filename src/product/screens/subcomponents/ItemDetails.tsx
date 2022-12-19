import { Image, Stack, Text, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacteristicsBuyItem from "./CharacteristicsBuyItem";
import ItemHeader from "./ItemHeader";
import ProductDescription from "./ProductDescription";

const ItemDetails: React.FC = () => {
	const [productId, setProductId]: any = useState({});

	const [loading, setLoading] = useState(false);

	const { id } = useParams<{ id: string }>();

	const urlId = `http://localhost:3001/api/items/${id}`;

	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(urlId)
			.then((response) => response.json())
			.then((data) => {
				setProductId(data.item);
				setLoading(true);
			})
			.catch((error: any) => {
				// Guardamos el error en una variable
				console.log("error", error);
				setError(error);
			});
	}, [urlId]);

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
			{loading ? (
				<>
					<ItemHeader productCatId={productId.category_id} />
					<Stack
						backgroundColor="white"
						borderRadius="4px"
						boxShadow="base"
						paddingBlockEnd={4}
						paddingBlockStart={4}
						spacing={0}
					>
						<Stack direction="row" height="550px">
							<Image
								fit="contain"
								height="468"
								objectPosition="center"
								src={productId.picture}
								minWidth="700"
							/>
							<Stack paddingInlineStart="40px">
								<CharacteristicsBuyItem productId={productId} />
							</Stack>
						</Stack>
						<ProductDescription productId={productId} />
					</Stack>
				</>
			) : (
				<>
					<Stack align="center" paddingBlockStart={1}>
						<Spinner color="gray.300" />
					</Stack>
				</>
			)}
		</>
	);
};

export default ItemDetails;
