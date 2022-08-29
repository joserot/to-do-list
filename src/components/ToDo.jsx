import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Notes from "./Notes";

const ToDo = () => {
	const notesSaved =
		localStorage.getItem("notes") !== null
			? JSON.parse(localStorage.getItem("notes"))
			: [];

	const [notes, setNotes] = useState(notesSaved);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const addNote = (e) => {
		e.preventDefault();
		const text = e.target.note.value;
		if (text.length === 0) return false;

		const note = {
			text,
			id: uuidv4(),
		};

		setNotes([...notes, note]);
		e.target.reset();
	};

	const deleteNote = (e) => {
		if (e.target.id) {
			const newNotes = notes.filter((n) => {
				return n.id !== e.target.id;
			});

			setNotes([...newNotes]);
		}
	};

	return (
		<div
			onClick={deleteNote}
			className="w-full flex flex-col justify-center items-center"
		>
			<h1 className="text-3xl text-center w-full">Lista de Tareas</h1>
			<form onSubmit={addNote} className="flex flex-col justify-center gap-1">
				<textarea
					name="note"
					placeholder="Escribe tu tarea"
					className="border-4 rounded "
					maxLength={100}
				/>
				<input type="submit" value="Agregar" className="border-4 rounded" />
			</form>
			<Notes notes={notes} />
		</div>
	);
};

export default ToDo;
