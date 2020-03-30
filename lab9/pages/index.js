import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/StyleComponent/StyleComponent.module.css'

const Home = () => {
  return (
    <div>
      <Head>
        <title>This is the homepage!</title>
      </Head>
      <div>
        <p className={styles.body}>
          Find a Pokemon! Catch 'em all!
        </p>
        <p>
        <Link href="/name">
          <a>Search by name</a>
        </Link>
        </p>
        <p>
        <Link href="/id">
          <a>Search by id</a>
        </Link>
        </p>
        <p>
        <Link href="/type">
          <a>Search by type</a>
        </Link>
        </p>
      </div>
      <div>
        <p className={styles.pikachuBackgroundImage}>
          </p>
        </div>
    </div>
  );
}

export default Home;
