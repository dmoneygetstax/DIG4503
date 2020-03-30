import Head from 'next/head';
import Link from 'next/link';
import TypeSearch from '../components/TypeSearch';
import styles from '../components/StyleComponent/StyleComponent.module.css'

const Type = () => {
  return (
    <div>
      <Head>
        <title>Type Search</title>
      </Head>
      <div>
        <p className={styles.body}>
          Search for a Pokemon by type!
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
        <Link href="/index">
          <a>Return home</a>
        </Link>
        </p>
      </div>
      <div>
          <TypeSearch />
          <h2>Reporting</h2>
            <div id="reportingArea"></div>
      </div>
    </div>
  );
}

export default Type;
