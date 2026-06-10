import { useState, useEffect } from 'react'
import Navbar from "./Navbar"
import Home from "./pages/Home"
import List from "./pages/List"
import About from "./pages/About"
import { Route, Routes, Link } from 'react-router-dom'

function App() {
    const [songs, setSongs] = useState([])
    const [logs, setLogs] = useState([])

    const compSongs = songs
        .filter(sng => sng.completed === true)
        .sort((a, b) => b.totalScore - a.totalScore)

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch(`https://harrydeng104.github.io/sound-tracker/data.json?t=${Date.now()}`)
            const data = await response.json()

            const loadedSongs = data.songs
            const loadedLogs = data.logs

            setSongs(loadedSongs)
            setLogs(loadedLogs)
        }
        loadData()
    }, [])

    return (
        <div className='bg-[#dbe0e3]'>
            <header className="bg-[#404b5d] p-2 text-center">
                <Link className="text-4xl font-bold p-3 text-[#daa654]" to="/">PIGEONHOLE</Link>
            </header>

            <Navbar />

            <div>
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
            </div>
        </div>
    )
}

export default App