
import { useState } from "react"

export default function Notes(props) {
    
    // Object destrucuture
    // const { notes } = props

    const [desc, setDesc] = useState('')
    const [notes, setNotes] = useState(props.notes)

    const handleChange = (event) => {
        console.log(event.target.value)
        setDesc(event.target.value)
    }

    const handleAdd = (event) => {
        event.preventDefault()
        const newNote = {
            id : notes.length + 1,
            desc: desc,
            important : Math.random() < 0.5
        }
        console.log(newNote);
        setNotes(notes.concat(newNote))
    }

    const handleDelete = (id) => {
        window.confirm('Are you sure to delete note with id ${noteId} ')
        const updatedNotes = notes.filter((note)=> note.id !==id);
        setNotes(updatedNotes);
    }

    return (
        <>
            <h1>Notes App</h1>
            <ul>
                {
                    notes.map(note => 
                        <li key = {note.id}>
                            {note.desc}
                            <>                   </>
                            <button onClick={(id)=>handleDelete(note.id)}>Delete</button>
                        </li>)
                }
            </ul>
            <br/>
            <form>
                <input type="text" value={desc} onChange={handleChange}/> 
                {" "}
                <button type="button" onClick={handleAdd}>Add</button>
            </form>
        </>
    )
}