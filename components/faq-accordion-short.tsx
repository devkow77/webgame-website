import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FaqAccordionShort = () => {
	return (
		<Accordion type="single" collapsible className="mb-6">
			<AccordionItem value="item-1">
				<AccordionTrigger>How can I start playing on your website?</AccordionTrigger>
				<AccordionContent>To start playing on our website, simply create a free account, choose a game from our library, and begin your gameplay.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Are your games available on mobile devices?</AccordionTrigger>
				<AccordionContent>Yes, many of our games are available on mobile devices. You can download our app on Android or iOS smartphones and tablets.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Do you offer multiplayer games?</AccordionTrigger>
				<AccordionContent>Yes, we offer a variety of games that can be played solo or in multiplayer mode. You can invite your friends to join the fun or join a community of players.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-4">
				<AccordionTrigger>Do you provide game demos before purchasing the full version?</AccordionTrigger>
				<AccordionContent> Absolutely! Many of our games have demo versions available. You can try them out before deciding to purchase the full version.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-5">
				<AccordionTrigger>How can I contact your technical support team in case of game-related issues?</AccordionTrigger>
				<AccordionContent>If you encounter any issues with our games, please feel free to contact us through the contact form on our website or by sending an email to support@webgame.com.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-6">
				<AccordionTrigger>Does your website have parental control features?</AccordionTrigger>
				<AccordionContent>Yes, we prioritize the safety of our youngest users. Our website includes parental control features that allow parents to manage playtime and restrict access to inappropriate content.</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default FaqAccordionShort;
