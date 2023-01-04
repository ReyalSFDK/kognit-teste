import * as React from "react";
import {
	Flex,
	IconButton,
	Popover,
	PopoverArrow, PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger, Spinner, Stack, Text, useToast,
} from "@chakra-ui/react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { AiFillBell } from "react-icons/all";

import { Store } from "./store";
import { NotificationItem } from "../../components";

export const Dashboard: React.FC = observer(() => {
	const store = useLocalObservable(() => new Store());
	const toast = useToast();

	const fetchNotification = async () => {
		await store.fetchNotifications(
			() => {
				toast({
					title: "Erro ao carregar notificações",
					description: "Tente novamente mais tarde",
					status: "error",
					isClosable: true,
				});
			},
		);
	}

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
				onOpen={() => fetchNotification()}
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
					<PopoverCloseButton height={30} />
					<PopoverBody>
						{
							(!store.isLoading && store.notifications.length === 0)
								? <Text>Sem notificações no momento</Text>
								: (
									<Stack spacing={3}>
										{store.notifications.map((notification) => (
											<NotificationItem
												title={notification.title}
												message={notification.body}
												key={notification.id}
											/>
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
