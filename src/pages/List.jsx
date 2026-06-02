export default function List({ songs = [] }) {
    return (
        <>
            <body>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] bg-[#35505b] p-3">
                    {songs.map((song) => 
                        <div 
                            key = {song.id}
                            className="p-2 flex items-center hover:bg-gray-200 m-1 rounded-xl bg-[#246869] cursor-pointer text-white font-semibold"
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
            </body>
        </>
    )
}