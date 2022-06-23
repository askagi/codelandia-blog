import Header from '../../components/Header';
import Post from '../../components/Post';
import './style.css';

const posts = [
  {
    id: 1,
    title: 'Agora é oficial: o Windows 11 está vindo',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
    date: '02 de jul, 2021'
  },
  {
    id: 2,
    title: 'Tim Berners-Lee vai leiloar código-fonte da web',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    date: '02 de jul, 2021'
  },
  {
    id: 3,
    title: 'Tem Firefox novo no pedaço e você vai querer migrar',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.',
    date: '02 de jul, 2021'
  },
  {
    id: 4,
    title: 'John McAfee, criador do antivírus McAfee, morre',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    date: '02 de jul, 2021'
  }
]

function Home() {
  return (
    <div className="home">
      <Header />

      <div className="container-posts">
        {!posts.length ?
          <h2>Não ha postagens</h2>
          :
          posts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Home;
