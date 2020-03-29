import Head from 'next/head';
import Link from 'next/link';
import IdSearch from '../components/IdSearch';

const Id = () => {
  return (
    <div>
      <Head>
        <title>Id Search</title>
      </Head>
      <div>
        <p>
          Search for a Pokemon by id! Catch 'em all!
        </p>
        <p>
        <Link href="/name">
          <a>Search by name</a>
        </Link>
        </p>
        <p>
        <Link href="/type">
          <a>Search by type</a>
        </Link>
        </p>
        <p>
        <Link href="/index">
          <a>Return home</a>
        </Link>
        </p>
      </div>
      <div>
          <IdSearch />
          <h2>Reporting</h2>
            <div id="reportingArea"></div>
      </div>
    </div>
  );
}

export default Id;
