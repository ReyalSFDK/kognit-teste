import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

interface IProps {
	title: string;
	message: string;
}

export const NotificationItem: React.FC<IProps> = observer((props) => {
	const { message, title } = props;

	return (
		<Box
			borderBottom="1px solid #53535325"
			py={3}
		>
			<Text fontWeight="bold" fontSize="md" >{title}</Text>
			<Text
				maxW="90%"
				fontWeight="thin"
				fontSize="sm"
			>
				{message}
			</Text>
		</Box>
	)
});
