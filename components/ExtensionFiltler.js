'use client';

import { useSearchParams, useRouter } from 'next/navigation';

function ExtensionFiltler({ activeFilter }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set('filter', filter);
    router.replace(`?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex flex-col items-center gap-6 md:flex-row justify-between">
      <h2 className=" text-3xl font-semibold text-[var(--text-muted)]">
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
          ? 'bg-[var(--color-acent-400)] text-neutral-100 font-semibold hover:bg-[var(--color-acent-500)]'
          : 'bg-[var(--color-neutral-100)] text-[var(--text-muted)] hover:bg-neutral-200 hover:text-[var(--text-dim)] focus:bg-neutral-300'
      } py-2 px-5 rounded-4xl cursor-pointer transition-colors shadow focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-100 focus:ring-[var(--color-acent-400)] outline-none`}
    >
      {children}
    </button>
  );
}
