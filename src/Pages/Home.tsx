import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className='c-home'>
      <nav className='o-container'>
        <ul>
          <li>
            <Link className="c-home__link" to="/treehouse">Treehouse</Link>
          </li>
          <li>
            <Link className="c-home__link" to="/eight-point-walk">Eight point walk</Link>
          </li>
          <li>
            <Link className="c-home__link" to="/free-walk">Free movement</Link>
          </li>
          <li>
            <Link className="c-home__link" to="/ripple">Ripple</Link>
          </li>
          <li>
            <Link className="c-home__link" to="/trail">Trail</Link>
          </li>
          <li>
            <Link className="c-home__link" to="/rubik">Rubik</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}

export default Home
