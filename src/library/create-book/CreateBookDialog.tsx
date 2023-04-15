import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Rating, TextField, Typography } from "@mui/material"
import { useToggleStateContext } from "../../ConfigContext"
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
    const { a11yMode } = useToggleStateContext()

    const isPhotoUrlInvalid = (url: string | null): boolean => {
        if (url === '') {
            return false
        }

        if (isValidHttpUrl(url)) {
            return false
        }

        return true
    }

    const isFormInvalid = formData.title?.length < 1
        || formData.author?.length < 1
        || formData.description?.length < 1
        || parseInt(formData.yearMark) > (new Date).getFullYear()
        || parseInt(formData.yearMark) < 1
        || formData.yearMark === ''
        || isPhotoUrlInvalid(formData.photoUrl)


    const textFieldSize = a11yMode ? undefined : 'small'

    return (
        <Dialog open={isOpen}>
            <DialogTitle>
                <Typography variant={a11yMode ? 'h4' : 'h5'} color="inherit" component="div" flexGrow={1}>
                    Dodaj nową książkę
                </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography variant={a11yMode ? 'h6' : 'body1'} color="inherit" component="div" flexGrow={1}>
                        Po zapisaniu, nowo dodana ksiąka od razu
                        pokaze się w bibliotece.
                    </Typography>

                </DialogContentText>

                <TextField
                    autoFocus
                    fullWidth
                    helperText="Podaj nazwę książki"
                    label="Tytuł"
                    margin="dense"
                    size={textFieldSize}
                    error={formData.title?.length < 1}
                    value={formData.title}
                    onChange={handleChange}
                    id="title"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    fullWidth
                    helperText="Podaj autora książki"
                    label="Autor"
                    size={textFieldSize}
                    error={formData.author?.length < 1}
                    value={formData.author}
                    onChange={handleChange}
                    id="author"
                />
                <TextField
                    autoFocus
                    fullWidth
                    margin="dense"
                    helperText="Podaj opis"
                    label="Opis"
                    size={textFieldSize}
                    error={formData.description?.length < 1}
                    value={formData.description}
                    onChange={handleChange}
                    id="description"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    fullWidth
                    size={textFieldSize}
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
                    fullWidth
                    size={textFieldSize}
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
                    fullWidth
                    size={textFieldSize}
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
                <Button size={a11yMode ? 'large' : 'medium'} onClick={handleClose}>Anuluj</Button>
                <Button size={a11yMode ? 'large' : 'medium'} variant="contained" disabled={isFormInvalid} onClick={handleSubmit}>Dodaj</Button>
            </DialogActions>
        </Dialog>
    )
}