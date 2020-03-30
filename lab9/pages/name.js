import Head from 'next/head';
import Link from 'next/link';
import NameSearch from '../components/NameSearch';
import styles from '../components/StyleComponent/StyleComponent.module.css'

const Name = () => {
  return (
    <div>
      <Head>
        <title>Name Search</title>
      </Head>
      <div>
        <p className={styles.body}>
          Search for a Pokemon by name!
        </p>
        <p>
        <Link href="/id">
          <a className={styles.linkText}>▶ Search by id</a>
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
          <NameSearch />
          <h2 className={styles.linkText}>Reporting</h2>
            <div id="reportingArea"></div>
      </div>
    </div>
  );
}

export default Name;
