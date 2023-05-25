export default function notes(props){
    const {notes} = props
    return(
        <>
        <h1>Notes App</h1>

        <ul>{
            notes.map(notes =>
                <li key={note.id}>{notes.desc}</li>
                
                )
            
            }</ul>
        </>
    )
}