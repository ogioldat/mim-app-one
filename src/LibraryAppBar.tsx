import { AppBar, Toolbar, Typography } from "@mui/material";
import A11yToggle from "./components/A11yToggle";
import { useToggleStateContext } from "./ConfigContext";
import CreateBookButton from "./library/create-book/CreateBookButton";
import LoginIcon from '@mui/icons-material/Login';
import { useGoogleAuth } from "./firebase/useGoogleAuth";

export default function LibraryAppBar() {
    const { a11yMode } = useToggleStateContext()
    const [user, auth] = useGoogleAuth()

    const isNotAuthed = user === null

    return (
        <AppBar >
            <Toolbar>
                <Typography variant={a11yMode ? 'h4' : 'h5'} color="inherit" component="div" flexGrow={1}>
                    Książki
                </Typography>

                <A11yToggle />

                {
                    isNotAuthed && <LoginIcon onClick={auth} />
                }

                {
                    user?.role === 'admin' && <CreateBookButton />
                }
            </Toolbar>
        </AppBar>
    )
}