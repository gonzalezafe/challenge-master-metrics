import { Box, Container, Stack, Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

import Navbar from "../app/subcomponents/Navbar";

import Routes from "./routes";

const App: React.FC = () => {
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<Stack bg="blackAlpha.100">
					<Container alignSelf="center" maxWidth="100%" paddingX={0}>
						<Stack align="center" position="relative" spacing={0}>
							<Navbar />
							<Box maxWidth="1184" width="full">
								<Routes />
							</Box>
						</Stack>
					</Container>
				</Stack>
			</Suspense>
		</>
	);
};

export default App;
