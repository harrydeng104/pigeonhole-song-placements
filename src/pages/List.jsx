import { useState } from 'react'

export default function List({ songs = [] }) {
    const [selectedSong, setSelectedSong] = useState(null)

    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] bg-[#35505b] p-3">
                {songs.map((song) => 
                    <div 
                        key = {song.id}
                        className="p-2 flex items-center hover:bg-gray-200 hover:text-black m-1 rounded-xl bg-[#246869] cursor-pointer text-white font-semibold"
                        onClick={() => setSelectedSong(song)}
                    >
                        {song.albumArt != null && (<img className="rounded-[5px] w-10 h-10 mr-2" src = {song.albumArt} />)}
                        <div className="text-left flex flex-col flex-1 whitespace-nowrap overflow-hidden mr-2">
                            <span>{song.name}</span>
                            <span>{song.artists}</span>
                        </div>
                        <span>{song.totalScore.toFixed(1)}</span>
                    </div>
                )}
            </div>

            {selectedSong && (
                <div className="fixed bottom-0 left-0 right-0 h-100 bg-[#fe7461] p-5">
                    
                    {selectedSong.albumArt != null && (<img className="rounded-[5px] w-25 h-25 mr-2" src = {selectedSong.albumArt} />)}
                    
                    <h1 className="text-2xl font-semibold">
                        <a href={selectedSong.externalUrls} target="_blank" rel="noopener noreferrer">
                            {selectedSong.name}
                        </a>
                    </h1>

                    <h3 className='mb-4'>{selectedSong.artists}</h3>

                    <h3 className='mb-2 font-semibold'>Overall: {selectedSong.totalScore.toFixed(1)}</h3>

                    <h3>Vocals: {selectedSong.vocalScore}</h3>
                    
                    <h3>Background: {selectedSong.backgroundScore}</h3>
                    
                    <h3>Lyrics: {selectedSong.lyricScore}</h3>

                    <h3>Cohesion: {selectedSong.cohesionScore}</h3>
                    
                    <h3>Flow: {selectedSong.flowScore}</h3>

                    <h3>Comments: {selectedSong.comments}</h3>

                    <button
                        className="absolute top-4 right-4 cursor-pointer text-black"
                        onClick={() => setSelectedSong(null)}
                    >
                        ✕
                    </button>
                </div>
            )}
        </>
    )
}