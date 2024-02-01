export default function StoriesList({ data }) {
	return (
		<>
			{data?.map((story) => (
				<div key={story.id}>
					<h2>{story.language}</h2>
					<p>{story.content}</p>
				</div>
			))}
		</>
	);
}
