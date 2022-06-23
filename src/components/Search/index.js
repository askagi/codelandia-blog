import './style.css';
import SearchOutlined from '../../assets/icons/search-outlined.svg';

const Search = () => {
    return (
        <div className="relative-search">
            <input
                className="search"
                type="search"
                placeholder='Pesquisar no blog'
            />
            <img className='search__icon' src={SearchOutlined} alt=" search icons" />
        </div>

    )
}
export default Search;