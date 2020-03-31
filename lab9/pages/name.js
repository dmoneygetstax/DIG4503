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
        <img className={styles.img} width="300" height="300" src="mankey.png" />
        <img className={styles.imgTrainer} width="500" height="500" src="trainer.png" />
        <p className={styles.body}>
          Search for a Pokemon by name!
        </p>

        <div className={styles.container}>

          <div className={styles.box}>
          <Link href="/id">
          <a className={styles.linkText}>▶ Search by id</a>
          </Link>
        </div>
          <div className={styles.box}>
          <Link href="/type">
          <a className={styles.linkText}>▶ Search by type</a>
          </Link>
          </div>
          <div className={styles.box}>
          <Link href="/index">
          <a className={styles.linkText}>▶ Return home</a>
          </Link>
        </div>

      </div>
        
      <div>
          <NameSearch />
          <h2 className={styles.reportingArea}>Reporting</h2>
            <div id="reportingArea" className={styles.linkText}></div>
      </div>
    </div>
    </div>
  );
}

export default Name;