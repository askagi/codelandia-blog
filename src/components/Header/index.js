import Search from '../Search';
import './style.css'

const Header = () => {

    return (
        <header className='header'>
            <div className="header__content">
                <div className="header__row">
                    <h4 className="header__title">Codelândia</h4>
                    <h4 className="header__title">blog</h4>
                </div>
                <div className="header__row">
                    <Search />
                </div>
            </div>
        </header>
    )
}

export default Header;