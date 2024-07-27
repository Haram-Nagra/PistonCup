import { ThreeDCard } from "./3d-card"


export default function TheTeam() {
	const team = [
		{
			name: "Maaz Ali",
			role: "President",
			image: "/team/maaz.jpg"
		},
		{
			name: "Muhammad Ahmed",
			role: "VP Media",
			image: "/team/ahmed.jpg"
		},
		{
			name: "Ahmed Ayub",
			role: "VP Technical",
			image: "/team/ayub.jpg"
		},
		{
			name: "Asjad Ali",
			role: "VP Operations",
			image: "/team/asjad.jpg"
		},
		{
			name: "Rameela Adil",
			role: "VP Outreach",
			image: "/team/rameela .jpg"
		}
	]

	return (
		<section className="flex h-full w-full flex-col bg-white py-10">
			<h1 className="mb-6 text-center text-5xl font-bold text-black">
				The Team
			</h1>
			<div className="grid gap-4 px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{team.map((member, index) => (
					<ThreeDCard {...member} key={index} />
				))}
			</div>
		</section>
	)
}

export const Card = ({
	name,
	role,
	image
}: {
	name: string
	role: string
	image: string
}) => {
	return (
		<div className="flex h-80 w-56 flex-col items-center justify-center rounded-lg bg-white shadow-lg">
			<img src={image} alt={name} className="h-32 w-32 rounded-full" />
			<div className="mt-4 flex flex-col items-center justify-center">
				<h1 className="text-xl font-bold text-neutral-900">{name}</h1>
				<p className="text-sm font-normal text-neutral-500">{role}</p>
			</div>
		</div>
	)
}
