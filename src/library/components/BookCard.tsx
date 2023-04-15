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

    return (
        <Card>
            {
                photoUrl !== null && <CardMedia
                    component="img"
                    src={photoUrl}
                    width={50}
                    height={150}
                >
                </CardMedia>
            }
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