import { Button, IconButton } from "@mui/material";
import React, { useContext, useState } from "react";
import CreateBookDialog from "./CreateBookDialog";
import AddIcon from '@mui/icons-material/Add';
import { IBook } from "../../types/IBook";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { FirebaseContext } from "../../firebase/FirebaseContext";
import { useToggleStateContext } from "../../ConfigContext";

export type FormData = Omit<IBook, 'id'>

export default function CreateBookButton() {
    const { a11yMode } = useToggleStateContext()

    const firebase = useContext(FirebaseContext)
    const db = getFirestore(firebase)

    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        yearMark: (new Date).getFullYear().toString(),
        photoUrl: '',
        author: '',
        rating: 5
    })

    function handleChange(e: any) {
        const { id, value } = e.target;

        if (id === undefined) {
            setFormData((prevState: FormData) => ({
                ...prevState,
                rating: value
            }));
            return
        }

        setFormData((prevState: FormData) => ({
            ...prevState,
            [id]: value
        }));
    }

    function handleCreateBook() {
        const dbPayload: FormData = {
            ...formData,
            photoUrl: formData.photoUrl || null
        }

        addDoc(collection(db, 'library'), dbPayload).finally(() => { setIsOpen(false) })
    }

    return (
        <React.Fragment>
            <IconButton
                onClick={() => setIsOpen(true)}
                color="inherit"
                aria-label="create book">
                <AddIcon fontSize={a11yMode ? 'large' : 'small'} />
            </IconButton>

            <CreateBookDialog
                formData={formData}
                isOpen={isOpen}
                handleClose={() => setIsOpen(false)}
                handleSubmit={handleCreateBook}
                handleChange={handleChange}
            />
        </React.Fragment>
    )
}