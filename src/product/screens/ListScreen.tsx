import { Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Product } from "../types";
import ItemDescription from "./subcomponents/ItemDescription";
import ResultHeader from "./subcomponents/ResultHeader";

interface Props {
	product: Product;
	location: any;
}

const ListScreen: React.FC<Props> = (props: Props) => {
	const [error, setError] = useState(false);
	const [products, setProducts] = useState([]);
	const search = new URLSearchParams(props.location.search).get("search");

	const url = `http://localhost:3001/api/items?q=${search}`;

	useEffect(() => {
		if (search) {
			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setProducts(data.items);
				})
				.catch((error: any) => {
					// Guardamos el error en una variable
					console.log("error", error);
					setError(error);
				});
		}
	}, [url]);

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
			{search ? (
				<>
					<ResultHeader productUrl={url} />
					<Stack
						backgroundColor="white"
						borderRadius="4px"
						boxShadow="base"
						paddingBlockEnd={4}
						paddingBlockStart={4}
						spacing={0}
					>
						<ItemDescription product={products}></ItemDescription>
					</Stack>
				</>
			) : (
				<Text />
			)}
		</>
	);
};

export default ListScreen;
