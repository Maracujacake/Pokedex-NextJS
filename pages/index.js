import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '../components/Card'

export async function getStaticProps(){

  // maximo de pokemons
  const maxPokemons = 251;
  // rota da api
  const api = 'https://pokeapi.co/api/v2/pokemon'

  // faz a requisição da api limitando o numero de pokemons de acordo
  // com o requisitado
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach( (item, index) => {
    item.id = index + 1 
  } )

  return{
    props: {
      pokemons: data.results
    }
  };
}

export default function Home( {pokemons} ) {
  return (
  <>
    <div className={styles.title_container}>
      <h1 className={styles.title}><span>Poke</span>dex</h1>
      <Image src="/images/pokeball.png" width="50" height="50" alt='pokebola'/>
    </div>
    <div className={styles.pokemon_container}>
      {pokemons.map( (pokemon) => {
        return(<Card key={pokemon.id} pokemon={pokemon}/>);
})}
    </div>
  </>
  );
}
