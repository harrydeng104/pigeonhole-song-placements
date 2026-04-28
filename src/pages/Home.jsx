export default function Home({ logs = [] }) {
    const sortedLogs = logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

    return (
        <>
            <ul className="bg-gray-300 m-10">
                {sortedLogs.map((log) => 
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