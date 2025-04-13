import ExtensionFiltler from '../components/ExtensionFiltler';
import ExtensionList from '../components/ExtensionList';
import * as motion from 'motion/react-client';

export default async function Home({ searchParams }) {
  const filterParams = await searchParams;
  const filter = filterParams.filter ?? 'all';
  return (
    <>
      <ExtensionFiltler activeFilter={filter} />
      <ExtensionList filter={filter} />
    </>
  );
}
