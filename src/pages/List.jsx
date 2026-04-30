export default function List({ songs = [] }) {
    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                {songs.map((song) => 
                    <div 
                        key = {song.id}
                        className="p-1 flex items-center hover:bg-gray-200 m-1 rounded-xl bg-pink-100"
                    >
                        {song.albumArt != null && (<img className="rounded-[5px] w-10 h-10 mr-1" src = {song.albumArt} />)}
                        <div className="text-left flex flex-col flex-1 whitespace-nowrap overflow-hidden">
                            <span>{song.name}</span>
                            <span>{song.artists}</span>
                            <span>{song.totalScore}</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}