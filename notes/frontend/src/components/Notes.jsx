function Notes ({ note, onDelete}) {

  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

  return (
    <div className="note-div">
      <h4>Title: {note.title}</h4>
      <p>{note.content}</p>
      <p>{formattedDate}</p>
      <button className="submit-button"
        onClick={()=>onDelete(note.id)}
      >Delete</button>
    </div>
  )
}

export default Notes