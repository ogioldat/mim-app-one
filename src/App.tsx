import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import CreateBookButton from "./library/create-book/CreateBookButton";


export default function App({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" color="inherit" component="div" flexGrow={1}>
                        Library
                    </Typography>

                    <CreateBookButton />
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
        </>
    )
}