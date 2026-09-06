import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = () => (
  <Table data={data} caption="Personal statistics" />
);

export default PersonalStats;
