import { useState } from "react"
import { app, database } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddNote = () => {

    const [displayAddNote, setDisplayAddNote] = useState(false)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const dbInstance = collection(database, 'notes');

    const saveNote = () => {
        addDoc(dbInstance, {
            title: title,
            body: body
        })
            .then(res => {
                console.log(res)
                alert("Note Added")
            })
            .then(() => {
                setTitle("")
                setBody("")
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div>
                <button onClick={() => setDisplayAddNote(true)}>Add New Note</button>
            </div>
            {displayAddNote ?
                <div>
                    <div>
                        <input type="text" onChange={e => setTitle(e.target.value)}></input>
                    </div>
                    <div>
                        <ReactQuill value={body} onChange={e => setBody(e)} />
                    </div>
                    <div>
                        <button onClick={saveNote}>Save Note</button>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export default AddNote