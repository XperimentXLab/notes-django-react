import { useEffect, useState } from "react"
import api from "../api"
import Notes from "../components/Notes"

function Home () {

  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    getNotes()
  },[])

  const getNotes = () => {
    api.get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data)
      })
      .catch((err) => alert(err))
  }

  const deleteNote = (id) => {
    api.delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert("Note deleted!")
        } else {
          alert("Failed to delete note!")
        }
      })
      .catch((err) => alert(err))
    getNotes()
  }

  const createNote = (e) => {
    e.preventDefault()
    api.post("/api/notes/", {
      title, content
    })
      .then((res) => {
        if (res.status === 201) {
          alert("Note created!")
        } else {
          alert("Failed to create note!")
        }
      })
      .catch((err) => alert(err))
    getNotes()
  }

  const notesEl = notes.map((note) => {
    return (
      <Notes note={note} onDelete={deleteNote} key={note.id}/>
    )
  })

  return (
    <>
      <h2>Home</h2>
      <hr />
      
      <h3>Create Note</h3>
      <form onSubmit={createNote} className="create-note-div">
        <label htmlFor="title">Title: </label>
        <br />
        <input type="text" id="title" 
        className="title-input"
          placeholder="Enter title"
          name="title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="content">Content: </label>
        <br />
        <textarea placeholder="Enter content"
          id="content"
          name="content"
          value={content}
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>

      <br />
      <h3>Notes</h3>
      <div className="notes-div">
        {notesEl}
      </div>

    </>
  )
}

export default Home