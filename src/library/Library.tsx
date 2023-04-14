import BookCard from "./components/BookCard";
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase/FirebaseContext";
import { collection, CollectionReference, getDocs, getFirestore } from "firebase/firestore"
import { IBook } from "../types/IBook";

export default function Library() {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [books, setBooks] = useState<IBook[]>([])

    const firebase = useContext(FirebaseContext)
    const db = getFirestore(firebase)

    const querySnapshot = getDocs<IBook>(
        collection(db, "library") as CollectionReference<IBook>
    );

    useEffect(() => {
        setIsLoading(true)
        querySnapshot
            .then(snapshot => {
                const books: IBook[] = []
                snapshot.forEach(doc => {
                    books.push({
                        ...doc.data(),
                        id: doc.id
                    })
                })
                setBooks(books)
            })
            .catch(err => {
                console.error(err)
                setIsError(true)
            })
            .finally(() => setIsLoading(false))
    }, [])

    if (isError) {
        return <div>Unexpected error occurred</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return books.map(book => {
        return <BookCard key={book.id} {...book} />
    })
}