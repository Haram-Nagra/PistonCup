import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "./accordion"
import { InfiniteMovingCards } from "./infinite-moving-cards"

export function Sponsors() {
	return (
		<section className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-x-hidden py-10">
			<div className="container mx-auto">
				<h1 className="text-center text-4xl font-bold text-white">
					Sponsors
				</h1>
			</div>
			<InfiniteMovingCards
				items={testimonials}
				direction="left"
				speed="slow"
			/>
			<div className="container mx-auto">
				<h1 className="text-center text-4xl font-bold text-white">
					Timeline
				</h1>
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>Registrations Open</AccordionTrigger>
						<AccordionContent>
							30 April 2024 till 10 June 2024
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>
							Registerations Close
						</AccordionTrigger>
						<AccordionContent>
							Extended till 10 June 2024
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger>Initial Phase</AccordionTrigger>
						<AccordionContent>

						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5">
						<AccordionTrigger>
							Car Fabrication and Progress Reports
						</AccordionTrigger>
						<AccordionContent>
							
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-6">
						<AccordionTrigger>Final Phase</AccordionTrigger>
						<AccordionContent>
							Testing Final Race Social
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</section>
	)
}

const testimonials = [
	"/sponsors/1.png",
	"/sponsors/2.png",
	"/sponsors/3.png",
	"/sponsors/5.png"
]
