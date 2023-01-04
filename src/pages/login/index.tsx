import * as React from "react";
import {
	Button,
	Card,
	CardBody,
	Checkbox,
	Container,
	Input, InputGroup, InputLeftElement, Stack
} from "@chakra-ui/react";
import { IoMdContact, IoMdLock } from "react-icons/all";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
	const navigate = useNavigate();

	const onLoginClick = () => {
		navigate("/dashboard");
	}

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
				<CardBody
					p={10}
				>
					<Stack
						spacing={5}
					>
						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<IoMdContact color="gray.300" />}
							/>
							<Input variant="flushed" type="email" placeholder="Insira seu email" />
						</InputGroup>

						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<IoMdLock color="gray.300" />}
							/>
							<Input variant="flushed" type="password" placeholder="Insira sua senha" />
						</InputGroup>

						<Checkbox colorScheme="green" defaultChecked> Entrar automaticamente</Checkbox>

						<Button
							width="full"
							mt={4}
							colorScheme="green"
							type="submit"
							onClick={() => onLoginClick()}
						>
							Entrar
						</Button>

						<Button
							variant="link"
							width="full"
							mt={4}
							colorScheme="green"
						>
							Esqueci minha senha
						</Button>
					</Stack>
				</CardBody>
			</Card>
		</Container>
	)
};
