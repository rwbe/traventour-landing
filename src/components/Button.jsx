import { Link } from 'react-router-dom'

function Button({ type, href, children, color }) {
  if (type === 'link') {
    if (color === 'blue') {
      return (
        <Link to={href} className='inline-flex gap-2 px-6 py-4 font-bold transition-all duration-300 bg-blue-400 rounded-lg shadow-md text-slate-50 hover:bg-blue-500 ease shadow-blue-200'>
          {children}
        </Link>
      )
    }
  } else if (type === 'play') {
    return (
      <button className='inline-flex items-center gap-4 px-6 py-4 font-bold rounded-lg text-slate-500'>
        <img src='/hero/play.svg' alt='Icon Play' className='rounded-full shadow-md size-10 shadow-blue-100' /> {children}
      </button>
    )
  }
}

export default Button
