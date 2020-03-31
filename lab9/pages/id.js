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
        <img className={styles.img} width="300" height="300" src="jigglypuff.png" />
        <img className={styles.imgTrainer} width="500" height="500" src="trainer.png" />
        <p className={styles.body}>
          Search for a Pokemon by id!
        </p>

        <div className={styles.container}>

          <div className={styles.box}>
          <Link href="/name">
          <a className={styles.linkText}>▶ Search by name</a>
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
          <IdSearch />
          <h2 className={styles.reportingArea}>Reporting</h2>
            <div id="reportingArea" className={styles.linkText}></div>
      </div>
    </div>
    </div>
  );
}

export default Id;
