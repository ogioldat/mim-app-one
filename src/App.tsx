import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import A11yToggle from "./components/A11yToggle";
import { useToggleStateContext } from "./ConfigContext";
import CreateBookButton from "./library/create-book/CreateBookButton";


export default function App({ children }: { children: React.ReactNode }) {
    const { a11yMode } = useToggleStateContext()

    return (
        <>
            <AppBar >
                <Toolbar>
                    <Typography variant={a11yMode ? 'h4' : 'h5'} color="inherit" component="div" flexGrow={1}>
                        Library
                    </Typography>

                    <A11yToggle />
                    <CreateBookButton />
                </Toolbar>
            </AppBar>
            <Container style={{ marginTop: '70px' }}>
                {children}
            </Container>
        </>
    )
}