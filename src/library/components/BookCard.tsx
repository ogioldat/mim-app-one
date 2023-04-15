import { Card, CardActions, CardContent, Button, Typography, Rating, CardMedia, Box } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import { IBook } from "../../types/IBook";

export default function BookCard({
    title,
    author,
    rating,
    photoUrl
}: IBook) {
    console.log(photoUrl)
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

        </Card>
    )
}