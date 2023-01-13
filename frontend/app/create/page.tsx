'use client'
import { Button, Label, Spinner, TextInput, Textarea } from 'flowbite-react'
import type { NextPage } from 'next'
import { useState } from 'react'
import { HiBriefcase, HiCalendar, HiCurrencyDollar, HiMail, HiPhotograph } from 'react-icons/hi'

const Create: NextPage = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [form, setForm] = useState({
		name: '',
		title: '',
		description: '',
		target: '',
		deadline: '',
		image: ''
	})
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(form)
	}
	const handleChange = (
		field: string,
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setForm({ ...form, [field]: e.target.value })
	}
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex justify-center pt-20">
				<div className="rounded-full bg-white bg-opacity-50 px-8 py-5 text-center text-5xl font-bold text-gray-600 shadow-2xl shadow-gray-300 dark:bg-black dark:text-gray-300">
					Start a Campaign
				</div>
			</div>
			<form onSubmit={handleSubmit} className="mt-20 flex w-full flex-col">
				<div className="mt-4 flex flex-wrap gap-4">
					<div className="flex flex-1 flex-col">
						<Label value="Your Name" className="mb-2" />
						<TextInput
							type="text"
							icon={HiMail}
							placeholder="Huy Lai"
							required={true}
							className="min-w-max"
							onChange={e => handleChange('name', e)}
						/>
					</div>
					<div className="flex flex-1 flex-col">
						<Label htmlFor="title" value="Title" className="mb-2" />
						<TextInput
							id="title"
							type="text"
							icon={HiBriefcase}
							placeholder="An impressive title"
							required={true}
							className="min-w-max"
							onChange={e => handleChange('title', e)}
						/>
					</div>
				</div>
				<Label htmlFor="story" value="Story" className="mb-2 mt-4" />
				<Textarea
					id="story"
					placeholder="Write your story ..."
					required={true}
					rows={5}
					onChange={e => handleChange('description', e)}
				/>
				<div className="mt-4 flex flex-wrap gap-4">
					<div className="flex flex-1 flex-col">
						<Label htmlFor="goal" value="Goal (ETH)" className="mb-2" />
						<TextInput
							id="goal"
							type="number"
							icon={HiCurrencyDollar}
							placeholder="Amount of money you want to raise"
							required={true}
							className="min-w-max"
							onChange={e => handleChange('target', e)}
						/>
					</div>
					<div className="flex flex-1 flex-col">
						<Label htmlFor="date" value="End Date" className="mb-2" />
						<TextInput
							id="date"
							type="date"
							icon={HiCalendar}
							required={true}
							className="min-w-max"
							onChange={e => handleChange('deadline', e)}
						/>
					</div>
				</div>
				<Label htmlFor="img" value="Campaign image" className="mb-2 mt-4" />
				<TextInput
					id="img"
					type="url"
					icon={HiPhotograph}
					placeholder="Image URL of your campaign"
					required={true}
					onChange={e => handleChange('image', e)}
				/>
				<div className="mt-6 flex flex-col items-center">
					<Button gradientDuoTone="purpleToBlue" type="submit">
						{isLoading ? (
							<>
								<Spinner />
								<span className="pl-3">Transaction in progress ...</span>
							</>
						) : (
							<span>Submit Campaign</span>
						)}
					</Button>
				</div>
			</form>
		</div>
	)
}

export default Create
