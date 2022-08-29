import Note from "./Note";

const Notes = (props) => {
	const notes = props.notes;

	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5 p-3 gap-3 items-center justify-center justify-items-center content-center">
			{notes.map((note) => {
				const id = note.id;
				return <Note key={id} note={note} />;
			})}
		</div>
	);
};

export default Notes;
