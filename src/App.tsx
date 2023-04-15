import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { ConfigContext } from "./ConfigContext";
import CreateBookButton from "./library/create-book/CreateBookButton";


export default function App({ children }: { children: React.ReactNode }) {
    return (
        <ConfigContext>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" color="inherit" component="div" flexGrow={1}>
                        Library
                    </Typography>

                    <CreateBookButton />
                </Toolbar>
            </AppBar>
            <Container style={{ marginTop: '70px' }}>
                {children}
            </Container>
        </ConfigContext>
    )
}