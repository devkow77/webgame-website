import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FaqAccordionLong = () => {
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
			<AccordionItem value="item-7">
				<AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
				<AccordionContent>We accept a variety of payment methods including credit/debit cards, PayPal, and other online payment platforms.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-8">
				<AccordionTrigger>Is there a refund policy for purchased games?</AccordionTrigger>
				<AccordionContent>Yes, we have a refund policy. If you're not satisfied with your purchase, please contact our support team within 30 days of the transaction for assistance.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-9">
				<AccordionTrigger>Are there any system requirements for playing games on your website?</AccordionTrigger>
				<AccordionContent>Yes, each game has its own set of system requirements. Please check the game's description page for specific details.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-10">
				<AccordionTrigger>Can I play games offline after downloading them?</AccordionTrigger>
				<AccordionContent>Yes, once a game is downloaded, you can play it offline without an internet connection, provided the game does not require online features.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-11">
				<AccordionTrigger>How often do you release new games?</AccordionTrigger>
				<AccordionContent>We regularly update our game library with new releases. Keep an eye on our announcements for the latest additions!</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-12">
				<AccordionTrigger>Do you have a rewards program for loyal customers?</AccordionTrigger>
				<AccordionContent>Yes, we offer a rewards program for our loyal customers. Earn points with each purchase and redeem them for exclusive perks and discounts.</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default FaqAccordionLong;
