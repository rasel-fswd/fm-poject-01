import ExtensionFiltler from '../components/ExtensionFiltler';
import ExtensionList from '../components/ExtensionList';

export default async function Home({ searchParams }) {
  const filterParams = await searchParams;
  const filter = filterParams.filter ?? 'all';
  return (
    <div>
      <ExtensionFiltler activeFilter={filter} />
      <ExtensionList filter={filter} />
    </div>
  );
}
