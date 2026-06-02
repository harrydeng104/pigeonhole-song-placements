import { useState, useEffect } from 'react'
import Navbar from "./Navbar"
import Home from "./pages/Home"
import List from "./pages/List"
import About from "./pages/About"
import { Route, Routes, Link } from 'react-router-dom'

import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase'

function App() {
    const [songs, setSongs] = useState([])
    const [logs, setLogs] = useState([])

    const compSongs = songs
        .filter(sng => sng.completed === true)
        .sort((a, b) => b.totalScore - a.totalScore)

    useEffect(() => {
        const loadSongs = async () => {
            const querySnapshot = await getDocs(collection(db, 'songs'))
            
            const loadedSongs = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))

            setSongs(loadedSongs)
        }
        loadSongs()

        const loadLogs = async () => {
            const querySnapshot = await getDocs(collection(db, 'logs'))
            
            const loadedLogs = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))

            setLogs(loadedLogs)
        }
        loadLogs()
    }, [])

    return (
        <>
            <header className="bg-[#404b5d] p-2 text-center">
                <Link className="text-4xl font-bold p-3 text-[#daa654]" to="/">PIGEONHOLE</Link>
            </header>

            <Navbar />

            <body className='bg-[#dbe0e3]'>
                <Routes>
                    <Route path="/" element={
                        <Home 
                            songs = {compSongs} 
                            logs = {logs}
                        />
                    } />
                    <Route path="/list" element={<List songs = {compSongs}/>} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </body>

            <footer className="bg-[#fe7461]">
                hi
            </footer>
        </>
    )
}

export default App