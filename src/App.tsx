import { Container } from "@mui/material";
import LibraryAppBar from "./LibraryAppBar";

export default function App({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LibraryAppBar />
            <Container style={{ marginTop: '70px' }}>
                {children}
            </Container>
        </>
    )
}