import { Card, CardActions, CardContent, Button, Typography, Rating } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';

export default function BookCard() {
    return (
        <Card>
            <BookIcon fontSize="large" />
            <CardContent>
                <Typography variant="h4">
                    1984
                </Typography>
                <Typography color="text.secondary">
                    George Orwell
                </Typography>
                <Rating
                    name="simple-controlled"
                    readOnly
                    value={4}
                />
            </CardContent>
            <CardActions>
                <Button size="small">Czytaj Więcej</Button>
            </CardActions>
        </Card>
    )
}