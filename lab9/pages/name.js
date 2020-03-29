import Head from 'next/head';
import Link from 'next/link';
import NameSearch from '../components/NameSearch';

const Name = () => {
  return (
    <div>
      <Head>
        <title>Name Search</title>
      </Head>
      <div>
        <p>
          Search for a Pokemon by name! Catch 'em all!
        </p>
        <p>
        <Link href="/id">
          <a>Search by id</a>
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
          <NameSearch />
          <h2>Reporting</h2>
            <div id="reportingArea"></div>
      </div>
    </div>
  );
}

export default Name;
