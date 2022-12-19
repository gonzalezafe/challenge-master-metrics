import { Box, Button, Icon, Image, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";

import Logo from "../../logo.png";

const Navbar: React.FC = () => {
	const [search, setSearch] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function resetSearch() {
		setSearch("");
		setSubmitted(false);
	}

	const SearchIcon = () => (
		<Icon as={AiOutlineSearch} color="gray.400" height={6} width={6} />
	);

	const SearchButton = ({ search }: any) => (
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
			<Box paddingY={4} bg="#FEE600" boxShadow="sm" paddingInlineStart={24}>
				<Stack direction={{ base: "column", md: "row" }} justifyContent="space-between">
					<Stack direction="row" flex={1} spacing={12}>
						<Stack paddingBlockStart={4}>
							<Link to={"/"} onClick={resetSearch}>
								<Image objectFit="contain" src={Logo} />
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
							width="100%"
						>
							<Input
								paddingX={2}
								variant="unstyled"
								placeholder="Nunca dejes de buscar"
								fontFamily="inherit"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
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
