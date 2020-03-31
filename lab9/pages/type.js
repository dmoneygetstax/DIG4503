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
        <img className={styles.img} width="300" height="300" src="sandshrew.png" />
        <img className={styles.imgTrainer} width="500" height="500" src="trainer.png" />
        <p className={styles.body}>
          Search for a Pokemon by type!
        </p>

        <div className={styles.container}>

          <div className={styles.box}>
          <Link href="/name">
          <a className={styles.linkText}>▶ Search by name</a>
          </Link>
        </div>
          <div className={styles.box}>
          <Link href="/id">
          <a className={styles.linkText}>▶ Search by id</a>
          </Link>
          </div>
          <div className={styles.box}>
          <Link href="/index">
          <a className={styles.linkText}>▶ Return home</a>
          </Link>
        </div>

      </div>
        
      <div>
          <TypeSearch />
          <h2 className={styles.reportingArea}>Reporting</h2>
            <div id="reportingArea"></div>
      </div>
    </div>
    </div>
  );
}

export default Type;
