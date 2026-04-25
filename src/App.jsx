import { useState, useEffect } from 'react'
import Navbar from "./Navbar"
import Home from "./pages/Home"
import List from "./pages/List"
import About from "./pages/About"
import { Route, Routes } from 'react-router-dom'

import { collection, getDocs, doc } from 'firebase/firestore'
import { db, auth } from './firebase'

function App() {
    const [songs, setSongs] = useState([])
    const [logs, setLogs] = useState([])

    const compSongs = songs
        .filter(sng => sng.completed === true)
        .sort((a, b) => b.totalScore - a.totalScore)

    useEffect(() => {
        const loadSongs = async () => {
            const querySnapshot = await getDocs(collection(db, 'songs'))
            const loadedSongs = querySnapshot.docs.map(doc => doc.data())
            setSongs(loadedSongs)
        }
        loadSongs()

        const loadLogs = async () => {
            const querySnapshot = await getDocs(collection(db, 'logs'))
            const loadedLogs = querySnapshot.docs.map(doc => doc.data())
            setLogs(loadedLogs)
        }
        loadLogs()
    }, [])

    return (
        <>
            <Navbar />
            <h1>Songs Ranked: {compSongs.length}</h1>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </>
    )
}

export default App