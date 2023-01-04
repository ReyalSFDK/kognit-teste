import * as React from "react";
import { Card, CardHeader, Container, Heading } from "@chakra-ui/react";

export const Login: React.FC = () => {
	return (
		<Container
			flex={1}
			centerContent={true}
			pt="30vh"
		>
			<Card
				size="lg"
				color="green"
				variant="elevated"
			>
				<CardHeader>
					<Heading size='md'>Login</Heading>
				</CardHeader>
			</Card>
		</Container>
	)
};
