import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import formatPrice from "../../../utils/formatPrice";
import { Product } from "../../types";

interface DescriptionProps {
	product: Product;
}

const ItemDescription: React.FC<DescriptionProps> = ({ product }) => {
	return (
		<Stack>
			{product.map((product: any) => {
				return (
					<Stack
						key={product.id}
						direction="row"
						display="flex"
						width="100%"
						borderBlockEnd="1px"
						borderBlockEndColor="blackAlpha.100"
						paddingBlockEnd={4}
						paddingBlockStart={2}
					>
						<Link to={`/items/${product.id}`}>
							<Image fit="contain" src={product.picture} height="160px" width="160px" />
						</Link>
						<Stack width="100%">
							<Text fontSize="20px" fontWeight="300px">
								{formatPrice(product.price.amount)}
							</Text>
							<Stack
								direction="row"
								display="flex"
								justifyContent="space-between"
								width="100%"
							>
								<Stack maxWidth="600px">
									<Link to={`/items/${product.id}`}>
										<Text fontSize="20px">{product.title}</Text>
									</Link>
								</Stack>
								<Text paddingInlineEnd={20} fontSize="14px" color="blackAlpha.700">
									{product.address}
								</Text>
							</Stack>
						</Stack>
					</Stack>
				);
			})}
		</Stack>
	);
};

export default ItemDescription;
