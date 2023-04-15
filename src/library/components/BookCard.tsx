import { Card, CardActions, CardContent, Button, Typography, Rating, CardMedia, Box } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import { IBook } from "../../types/IBook";
import { useToggleStateContext } from "../../ConfigContext";

export default function BookCard({
    title,
    author,
    rating,
    photoUrl
}: IBook) {
    const { a11yMode } = useToggleStateContext()
    const defaultBookPhotoUrl = 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg'

    return (
        <Card>
            <CardMedia
                component="img"
                src={photoUrl ?? defaultBookPhotoUrl}
                width={50}
                height={150}
            />

            <CardContent>
                <Typography variant={a11yMode ? 'h4' : 'h5'}>
                    {title}
                </Typography>
                <Typography color="text.secondary" variant={a11yMode ? 'h6' : 'body1'}>
                    {author}
                </Typography>
                <Rating
                    name="simple-controlled"
                    readOnly
                    value={rating}
                />
            </CardContent>

        </Card>
    )
}