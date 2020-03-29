import Head from 'next/head';
import Link from 'next/link';
//import styles from "../components/StyleComponent/SyleComponents.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>This is the homepage!</title>
      </Head>
      <div>
        <p //className={styles.styles} id="styles"
        >
          Find a Pokemon! Catch 'em all!
        </p>
        <p>
        <Link href="/api/pokemon/name/names">
          <a>Search by Name</a>
        </Link>
        </p>
        <p>
        <Link href="/api/pokemon/id/[id]">
          <a>Search by Id</a>
        </Link>
        </p>
        <p>
        <Link href="/api/pokemon/type/[type]">
          <a>Search by Type</a>
        </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
