import BookCard from "./components/BookCard";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase/FirebaseContext";
import { collection, getFirestore, onSnapshot, query } from "firebase/firestore"
import { IBook } from "../types/IBook";
import { Grid } from "@mui/material";

export default function Library() {
    const [isLoading, setIsLoading] = useState(false)
    const [books, setBooks] = useState<IBook[]>([])

    const firebase = useContext(FirebaseContext)
    const db = getFirestore(firebase)

    useEffect(() => {
        setIsLoading(true)
        const q = query(collection(db, "library"));
        return onSnapshot(q, (querySnapshot) => {
            const books: IBook[] = []
            querySnapshot.forEach((doc) => {
                books.push({
                    ...doc.data() as IBook,
                    id: doc.id
                })
            });
            setBooks(books)
            setIsLoading(false)
        });
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <Grid container spacing={2}>
        {
            books.map(book => {
                return (
                    <Grid item xs={12} key={book.id} >
                        <BookCard {...book} />
                    </Grid>
                )
            })
        }
    </Grid>
}