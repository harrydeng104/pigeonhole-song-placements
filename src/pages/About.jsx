export default function About() {
    return (
        <div className="flex flex-col">
            <span className="p-4">
                Context: All art, music included, is subjective. 
                This list is a compilation of my personal opinions.
            </span>
            <span className="p-4">
                The music in this list is ranked in the context of listening being the primary task. 
                Music that is intended to accompany another activity may be ranked lower as a result.
            </span>
            <span className="p-4 bg-red-300">
                Vocals - 
                The lead vocals. Songs that do not feature lead vocals will not be included in this list. 
            </span>
            <span className="p-4 bg-orange-300">
                Background - 
                Background instrumentals or vocals or anything outside of the lead vocals. 
            </span>
            <span className="p-4 bg-yellow-300">
                Lyrics - 
                The song lyrics.
            </span>
            <span className="p-4 bg-green-300">
                Cohesion -
                How well the different parts of the song fit together. The synergy between the vocals, background and lyrics.
            </span>
            <span className="p-4 bg-blue-300">
                Flow - 
                The direction of the song. How well the different sections transition into each other. 
            </span>

        </div>
    )
}