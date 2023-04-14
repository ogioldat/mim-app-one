import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Rating, TextField, Typography } from "@mui/material"
import { MouseEventHandler, useState } from "react"
import { IBook } from "../../types/IBook"

export type FormData = Omit<IBook, 'id'>

interface ICreateBookDialogProps {
    handleClose: () => void
    handleSubmit: () => void
    handleChange: (e: any) => void
    isOpen: boolean,
    formData: FormData
}

function isValidHttpUrl(str: string | null) {
    if (str === null) {
        return false
    }
    let url;
    try {
        url = new URL(str);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

export default function CreateBookDialog({
    handleClose,
    handleSubmit,
    isOpen,
    formData,
    handleChange
}: ICreateBookDialogProps) {
    const isFormInvalid = formData.title?.length < 1
        || formData.author?.length < 1
        || formData.description?.length < 1
        || parseInt(formData.yearMark) > (new Date).getFullYear()
        || parseInt(formData.yearMark) < 1
        || formData.yearMark === ''
        || isValidHttpUrl(formData.photoUrl)
        || formData.photoUrl !== ''

    return (
        <Dialog open={isOpen}>
            <DialogTitle>Dodaj nową ksiąkę</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Po zapisaniu, nowo dodana ksiąka od razu
                    pokaze się w bibliotece.
                </DialogContentText>

                <TextField
                    autoFocus
                    helperText="Podaj nazwę książki"
                    label="Tytuł"
                    margin="dense"
                    error={formData.title?.length < 1}
                    value={formData.title}
                    onChange={handleChange}
                    id="title"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    helperText="Podaj autora książki"
                    label="Autor"
                    error={formData.author?.length < 1}
                    value={formData.author}
                    onChange={handleChange}
                    id="author"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    helperText="Podaj opis"
                    label="Opis"
                    error={formData.description?.length < 1}
                    value={formData.description}
                    onChange={handleChange}
                    id="description"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    helperText="Podaj rok wydania"
                    label="Rok wydania"
                    error={parseInt(formData.yearMark) > (new Date).getFullYear()
                        || parseInt(formData.yearMark) < 1
                        || formData.yearMark === ''}
                    type="number"
                    value={formData.yearMark}
                    onChange={handleChange}
                    id="yearMark"
                />

                <TextField
                    autoFocus
                    margin="dense"
                    helperText="Opcjonalnie podaj link do zdjęcia"
                    label="Link do zdjęcia"
                    error={!isValidHttpUrl(formData.photoUrl) && formData.photoUrl !== ''}
                    value={formData.photoUrl}
                    onChange={handleChange}
                    id="photoUrl"
                />

                <TextField
                    autoFocus
                    margin="dense"
                    helperText="Oceń ksiązke"
                    label="Ocena"
                    select
                    onChange={handleChange}
                    defaultValue={5}
                    id="rating"
                >
                    {[1, 2, 3, 4, 5].map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Anuluj</Button>
                <Button disabled={isFormInvalid} onClick={handleSubmit}>Dodaj</Button>
            </DialogActions>
        </Dialog>
    )
}