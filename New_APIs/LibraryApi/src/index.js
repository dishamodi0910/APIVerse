import express from "express"

const PORT = 3000
const app = express()

let data = [
    {
        id: 1,
        name: 'Book1',
        author: 'Author1',
        publication: 'Pub1',
        totalCount: 10,
        availableCount: 6
    },
    {
        id: 2,
        name: 'Book2',
        author: 'Author2',
        publication: 'Pub2',
        totalCount: 5,
        availableCount: 1
    },
    {
        id: 3,
        name: 'Book3',
        author: 'Author3',
        publication: 'Pub3',
        totalCount: 3,
        availableCount: 3
    },
    {
        id: 4,
        name: 'Book4',
        author: 'Author4',
        publication: 'Pub4',
        totalCount: 15,
        availableCount: 10
    },
]

let borrowersData = [
    {
        id: 1,
        name: 'Md Rehan',
        book: 2,
        date: new Date()
    },
    {
        id: 2,
        name: 'Khushee',
        book: 4,
        date: new Date()
    },
    {
        id: 3,
        name: 'Om Kumar',
        book: 3,
        date: new Date()
    },
]

app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true }))

// Get All Books
app.get('/api/v1/books', (req, res) => {
    res.status(200).json({ success: true, data })
})

// Get All Borrowers
app.get('/api/v1/borrowers', (req, res) => {
    res.status(200).json({ success: true, data: borrowersData })
})

// Add Books
app.post('/api/v1/books', (req, res) => {
    
    try {
        const { name, author, publication, totalCount } = req.body;
    
        if([name, author, publication, totalCount].some((val) => !val || val == '')) throw new Error("Some Fields Are Missing")
    
        data.push({ id: data.length + 1, name, author, publication, totalCount, availableCount: totalCount })
    
        res.status(200).json({ success: true, message: 'Book Added Successfully' })
    } catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }

})

// Add Borrower
app.post('/api/v1/borrowers', (req, res) => {
    try {
        
        const { name, book } = req.body;
        if( !name || !book ) throw new Error("No Name Or Book Given")
        
        let isAvailable = false
        data.map((bk, index) => {
            if(bk.name == book && bk.availableCount) {
                data[index].availableCount--;
                isAvailable = true
            }
        })

        if(isAvailable) {
            borrowersData.push({ id: borrowersData.length + 1, name, book, date: new Date() })
            return res.status(200).json({ success: true, message: 'Borrower Added Successfully' })
        } else {
            throw new Error("No Book Found")
        }

    } catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
})

// Return Book
app.get('/api/v1/return/:id', (req, res) => {

    try {
        const { id } = req.params;
        if(!id) throw new Error("No ID")
        
        let isThere = false
        let book;
        borrowersData.map((bdata) => {
            if(bdata.id == id) isThere = true, book = bdata.book
        })

        if(isThere) {
            borrowersData = borrowersData.filter((bdata) => bdata.id != id)
            data[book - 1].availableCount++;
            res.status(200).json({ success: true, message: "Record Deleted Successfully" })
        } else {
            throw new Error("No Record Found")
        }
    } catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }

})

app.get('/api/v1/search', (req, res) => {
    try {
        const { bookName } = req.query
        for(let bk of data) {
            if(bk.name == bookName) {
                if(bk.availableCount) {
                    return res.status(200).json({ success: true, message: "Yes, book is there and available" })
                } else {
                    return res.status(200).json({ success: true, message: "Yes, book is there but currently not available" })
                }
            }
        }
        return res.status(200).json({ success: true, message: "Sorry, book is not there" })
    } catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:3000`)
})