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
          <a className={styles.linkText}>▶ Search by name</a>
        </Link>
        </p>
        <p>
        <Link href="/id">
          <a className={styles.linkText}>▶ Search by id</a>
        </Link>
        </p>
        <p>
        <Link href="/index">
          <a className={styles.linkText}>▶ Return home</a>
        </Link>
        </p>
      </div>
      <div>
          <TypeSearch />
          <h2 className={styles.linkText}>Reporting</h2>
            <div id="reportingArea"></div>
      </div>
    </div>
  );
}

export default Type;
