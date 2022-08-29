const Note = (props) => {
	const note = props.note.text;
	const id = props.note.id;

	return (
		<div className="bg-yellow-300 w-32 h-auto p-2 break-all  w-60 h-auto rounded">
			<div className="text-right w-full text-gray-500">
				<button className="text-right text-gray-500" id={id}>
					Borrar
				</button>
			</div>
			<p>{note} </p>
		</div>
	);
};

export default Note;
