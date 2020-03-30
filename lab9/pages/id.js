import Head from 'next/head';
import Link from 'next/link';
import IdSearch from '../components/IdSearch';
import styles from '../components/StyleComponent/StyleComponent.module.css'

const Id = () => {
  return (
    <div>
      <Head>
        <title>Id Search</title>
      </Head>
      <div>
        <p className={styles.body}>
          Search for a Pokemon by id!
        </p>
        <p>
        <Link href="/name">
          <a className={styles.linkText}>▶ Search by name</a>
        </Link>
        </p>
        <p>
        <Link href="/type">
          <a className={styles.linkText}>▶ Search by type</a>
        </Link>
        </p>
        <p>
        <Link href="/index">
          <a className={styles.linkText}>▶ Return home</a>
        </Link>
        </p>
      </div>
      <div>
          <IdSearch />
          <h2 className={styles.linkText}>Reporting</h2>
            <div id="reportingArea"></div>
      </div>
    </div>
  );
}

export default Id;
