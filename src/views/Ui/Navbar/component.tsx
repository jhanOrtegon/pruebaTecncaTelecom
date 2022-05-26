import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { loginContext } from '../../../context/auth/loginContext'
import { EAuth } from '../../../store/auth/enum'

const NavbarC: React.FC = () => {
    const { stateAuth, dispatch } = useContext(loginContext)
    const router = useNavigate()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container">

                <div style={{ width: '180px', display: 'flex', 'justifyContent': 'space-between', alignItems: 'center' }}>
                    <img src="/assets/logo/spiderman.png" alt="spiderman" height='50' />
                    <NavLink className="navbar-brand" to='/dashboard/marvel' >AppHeroes</NavLink>
                </div>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => 'nav-link ' + (isActive && 'active')}
                                to='/dashboard/marvel'>Heroes
                            </NavLink>
                        </li>

                        <li
                            className="nav-item">
                            <NavLink
                                className={({ isActive }) => 'nav-link ' + (isActive && 'active')}
                                to='/dashboard/search'>Buscar
                            </NavLink>
                        </li>

                    </ul>
                </div>

                <div className='d-flex justify-content-center align-items-center'>
                    <span className='text-white'>{stateAuth?.user}</span>
                    <button className='btn btn-danger mx-2'
                        onClick={() => {

                            const action = {
                                type: EAuth.logout
                            }

                            dispatch!(action)
                            router('/')

                        }}>Logout</button>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

    )
}

export default NavbarC
