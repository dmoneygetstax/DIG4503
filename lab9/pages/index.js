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
        <img className={styles.img} width="300" height="300" src="pikachu.png" />
        <img className={styles.imgTrainer} width="500" height="500" src="trainer.png" />
        <p className={styles.body}>
          What will you do?
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
          <Link href="/type">
          <a className={styles.linkText}>▶ Search by type</a>
          </Link>
        </div>

      </div>
    </div>
    </div>
  );
}

export default Home;