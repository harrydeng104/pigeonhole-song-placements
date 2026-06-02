import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import clsx from 'clsx'

export default function Navbar() {
    return (
      <nav className="bg-[#27343c] flex items-center justify-between p-1 text-[#dbe0e3]">
        <ul className="flex gap-4">
            <CustomLink to="/list">The List</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </ul>
      </nav>
    )
}

function CustomLink ({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li 
            className={clsx(
                "hover:bg-amber-600",
                {
                    'bg-amber-400': isActive
                }
            )} 
        >
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}