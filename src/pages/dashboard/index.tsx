import * as React from "react";
import {
	Box,
	Flex,
	IconButton,
	Popover,
	PopoverArrow, PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger, Spinner, Stack, Text,
} from "@chakra-ui/react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { AiFillBell } from "react-icons/all";

import { Store } from "./store";

export const Dashboard: React.FC = observer(() => {
	const store = useLocalObservable(() => new Store());

	return (
		<Flex
			bgColor="F7F8FA"
			boxShadow="0px 3px 6px #00000012"
			w="full"
			alignItems="center"
			justifyContent="flex-end"
			height="70px"
		>
			<Popover
				isLazy
				onOpen={() => store.fetchNotifications(
					() => {},
				)}
			>
				<PopoverTrigger>
					<IconButton
						mx={5}
						variant="ghost"
						size="lg"
						aria-label="Search database"
						icon={<AiFillBell color="#0ED93D" size={30} />}
					/>
				</PopoverTrigger>
				<PopoverContent
					minW={600}
				>
					<PopoverHeader
						display="flex"
						fontWeight="semibold"
						alignItems="center"
						fontSize="lg"
					>
						Notificações
						{
							store.isLoading && (
								<Spinner
									ml={3}
									color="#0ED93D"
									size="sm"
								/>
							)
						}
					</PopoverHeader>
					<PopoverArrow />
					<PopoverCloseButton />
					<PopoverBody>
						{
							(!store.isLoading && store.notifications.length === 0)
								? <Text>Sem notificações no momento</Text>
								: (
									<Stack>
										{store.notifications.map((notification) => (
											<Box key={notification.id}>
												<Text fontWeight="bold" fontSize="md" >{notification.title}</Text>
												<Text fontWeight="thin" fontSize="sm" >{notification.body}</Text>
											</Box>
										))}
									</Stack>
								)
						}
					</PopoverBody>
				</PopoverContent>
			</Popover>

		</Flex>
	)
});
