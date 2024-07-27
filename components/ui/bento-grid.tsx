import { LayoutGrid } from "@/components/ui/layout-grid"

export function BentoGrid() {
	return (
		<section className="relative h-full w-full bg-white py-10">
			<div className="h-screen w-full">
				<h1 className="text-center text-4xl font-bold text-gray-800">
					ACTIVITES
				</h1>
				<LayoutGrid cards={cards} />
			</div>
		</section>
	)
}

const SkeletonOne = () => {
	return (
		<div>
			<p className="text-4xl font-bold text-white">RACE</p>
			<p className="text-base font-normal text-white"></p>
			<p className="my-4 max-w-lg text-base font-normal text-neutral-200">
				Students from different universities of Pakistan will be given a
				chance to build their own OFF Road Car(Buggy), which will be
				tested on our race track at NUST Islamabad.
			</p>
		</div>
	)
}

const SkeletonTwo = () => {
	return (
		<div>
			<p className="text-4xl font-bold text-white">SOCIAL EVENT</p>
			<p className="text-base font-normal text-white"></p>
			<p className="my-4 max-w-lg text-base font-normal text-neutral-200">
				A social event will be held alongside the racing competition to
				get the hearts racing with excitement.
			</p>
		</div>
	)
}
const SkeletonThree = () => {
	return (
		<div>
			<p className="text-4xl font-bold text-white">EXCLUSIVE AUTO SHOW</p>
			<p className="text-base font-normal text-white"></p>
			<p className="my-4 max-w-lg text-base font-normal text-neutral-200">
				Taking inspiration from the best always leads to perfection. In
				this essence, we will be hosting an exclusive auto show to
				showcase the very best cars.
			</p>
		</div>
	)
}

const cards = [
	{
		id: 1,
		content: <SkeletonOne />,
		className: "col-span-1",
		thumbnail: "/pic11.jpg"
	},
	{
		id: 2,
		content: <SkeletonTwo />,
		className: "col-span-1",
		thumbnail: "/social.jpg"
	},
	{
		id: 3,
		content: <SkeletonThree />,
		className: "md:col-span-2",
		thumbnail: "/team/highlight1.jpg"
	}
]
