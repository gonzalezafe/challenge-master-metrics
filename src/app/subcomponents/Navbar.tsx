import { Box, Button, Icon, Image, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

const Navbar: React.FC = () => {
	const [search, setSearch] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const history = useHistory();

	function resetSearch() {
		setSearch("");
		setSubmitted(false);
	}

	const SearchIcon: React.FC = () => (
		<Icon as={AiOutlineSearch} color="gray.400" height={6} width={6} />
	);

	const SearchButton: React.FC<{ search: string }> = ({ search }) => (
		<Button onClick={() => setSubmitted(true)}>
			{search ? (
				<Link to={`/items?search=${search}`}>
					<SearchIcon />
				</Link>
			) : (
				<SearchIcon />
			)}
		</Button>
	);

	return (
		<Stack width="100%">
			<Box paddingY={2} bg="#FEE600" boxShadow="sm" paddingInlineStart={24}>
				<Stack direction={{ base: "column", md: "row" }} justifyContent="space-between">
					<Stack direction="row" flex={1} spacing={8} align="center">
						<Stack paddingBlockStart={1}>
							<Link to={"/"} onClick={resetSearch}>
								<Image
									objectFit="contain"
									src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.17-beta-2/mercadolibre/favicon.svg"
								/>
							</Link>
						</Stack>
						<Stack
							alignItems="center"
							backgroundColor="white"
							borderRadius="sm"
							boxShadow="sm"
							direction="row"
							maxWidth={600}
							padding={2}
							height={12}
							width="100%"
						>
							<Input
								paddingX={2}
								variant="unstyled"
								placeholder="Nunca dejes de buscar"
								fontFamily="inherit"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										setSubmitted(true);
										if (search) {
											history.push(`/items?search=${search}`);
										}
									}
								}}
								border={submitted && search === "" ? "1px solid red" : ""}
								style={submitted && search === "" ? { borderColor: "red" } : {}}
							/>

							<SearchButton search={search} />
						</Stack>
					</Stack>
				</Stack>
			</Box>
		</Stack>
	);
};

export default Navbar;
