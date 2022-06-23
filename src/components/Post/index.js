import './style.css';
import HeartOutlineIcon from '../../assets/icons/heart-outline.svg';
import HeartSolidIcon from '../../assets/icons/heart-solid.svg';
import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

const Post = ({ post }) => {
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        const sr = ScrollReveal(
            {
                duration: 2000,
                origin: 'top',
                distance: '50px',
                reset: true
            }
        );
        sr.reveal('.post', { delay: 200 });
        sr.reveal('.post__date', { delay: 400 });
        sr.reveal('.post__icon', { delay: 450, origin: 'left' });
        sr.reveal('.post__title', { delay: 500, origin: 'right' });
        sr.reveal('.post__text', { delay: 600, origin: 'bottom' });
    }, [])
    return (
        <div className="post">
            <header className="post__header">
                <span className='post__date'>{post.date}</span>
                <img
                    className='post__icon'
                    src={!favorite ? HeartOutlineIcon : HeartSolidIcon}
                    alt="heart icon"
                    onClick={() => setFavorite(!favorite)}
                />
            </header>
            <div className="post__body">
                <h2 className='post__title'>{post.title}</h2>
                <p className="post__text">{post.text}</p>
            </div>
        </div>
    )
}

export default Post;