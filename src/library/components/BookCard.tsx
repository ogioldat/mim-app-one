import { Card, CardActions, CardContent, Button, Typography, Rating } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import { IBook } from "../../types/IBook";

export default function BookCard({
    title,
    author,
    rating
}: IBook) {
    return (
        <Card>
            <BookIcon fontSize="large" />
            <CardContent>
                <Typography variant="h4">
                    {title}
                </Typography>
                <Typography color="text.secondary">
                    {author}
                </Typography>
                <Rating
                    name="simple-controlled"
                    readOnly
                    value={rating}
                />
            </CardContent>
            <CardActions>
                <Button size="small">Czytaj Więcej</Button>
            </CardActions>
        </Card>
    )
}