import IdSearch from '../components/IdSearch';
import NameSearch from '../components/NameSearch';

class Home extends React.Component {

render() {
  return (
  <div>
    <IdSearch />
    <NameSearch />
    <h2>Reporting</h2>
    <div id="reportingArea"></div>
  </div>
  );
}
}

export default Home;