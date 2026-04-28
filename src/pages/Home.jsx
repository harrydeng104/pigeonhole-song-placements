export default function Home({ logs = [] }) {
    return (
        <>
            <h1>Home</h1>
            <div>Link to List, Link to About</div>
            <ul className="">
                {logs.map((log) => 
                    <li 
                        key = {log.id}
                        className="p-1 flex items-center hover:bg-gray-200"
                    >
                        <span>{log.timestamp}: {log.songName} by {log.artists} was {log.action} to have a total score of {log.scores.total}</span>
                    </li>
                )}
            </ul>
        </>
    )
}