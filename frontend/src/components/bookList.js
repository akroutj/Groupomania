
const bookslist = [
    'Harry Potter',
    'Wonderpark',
    'Necropolis'
]

function Books() {
    return (
        <ul>
            {bookslist.map((book, index) => (
                <li key={`${book}-${index}`}>{book}</li>
            ))}
        </ul>
    )
}

export default Books