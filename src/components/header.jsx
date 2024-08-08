import '../App.css'
import Logo from '../assets/Logo.png'

function Header() {
    return (
        <>
            <header>
                <img src={Logo} alt="" />

                <h1 className='h1'>Arsenal <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" />
                </svg>
                    <ul>
                        <li><span>Pistolas</span></li>
                        <li><span>SMGs</span></li>
                        <li><span>Rifles</span></li>
                        <li><span>Fuzis de Precisão</span></li>
                        <li><span>Espingardas</span></li>
                        <li><span>Metralhadoras</span></li>
                        <li><span>Equipamentos</span></li>
                    </ul>
                </h1>
            </header>
        </>
    )
}

export default Header