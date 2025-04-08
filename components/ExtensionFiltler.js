'use client';

import { useSearchParams, useRouter } from 'next/navigation';

function ExtensionFiltler({ activeFilter }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set('list', filter);
    router.replace(`?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex flex-col items-center gap-6 md:flex-row justify-between">
      <h2 className=" text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
        Extension Lists
      </h2>
      <div className=" flex gap-3 text-neutral-900 dark:text-neutral-100">
        <Button
          filter="all"
          activeFilter={activeFilter}
          handleFilter={handleFilter}
        >
          All
        </Button>
        <Button
          filter="active"
          activeFilter={activeFilter}
          handleFilter={handleFilter}
        >
          Active
        </Button>
        <Button
          filter="inactive"
          activeFilter={activeFilter}
          handleFilter={handleFilter}
        >
          Inactive
        </Button>
      </div>
    </div>
  );
}

export default ExtensionFiltler;

function Button({ children, filter, handleFilter, activeFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`${
        filter === activeFilter
          ? 'bg-acent-700 dark:bg-acent-400 dark:hover:bg-acent-500 border-acent-500 hover:bg-acent-500 text-neutral-50'
          : 'bg-neutral-50 hover:bg-neutral-100 hover:text-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 border-neutral-200 dark:border-neutral-600 hover:border-neutral-100 dark:hover:border-neutral-600'
      } py-2 px-5 rounded-4xl cursor-pointer transition-colors border shadow`}
    >
      {children}
    </button>
  );
}
