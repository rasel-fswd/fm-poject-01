function ExtensionFiltler() {
  return (
    <div className="flex flex-col items-center gap-6 md:flex-row justify-between">
      <h2 className=" text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
        Extension Lists
      </h2>
      <div className=" flex gap-3 text-neutral-900 dark:text-neutral-100">
        <button className="shadow bg-acent-700 dark:bg-acent-400 hover:bg-acent-500 transition-colors text-neutral-50 dark:text-neutral-800 font-medium py-2 px-5 rounded-4xl cursor-pointer">
          All
        </button>
        <button className="shadow bg-neutral-50 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 hover:text-neutral-600 border border-neutral-200 dark:border-neutral-600 hover:border-neutral-100 dark:hover:border-neutral-600 py-2 px-5 rounded-4xl cursor-pointer transition-colors">
          Active
        </button>
        <button className="shadow bg-neutral-50 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 hover:text-neutral-600 border border-neutral-200 dark:border-neutral-600 hover:border-neutral-100 dark:hover:border-neutral-600 py-2 px-5 rounded-4xl cursor-pointer transition-colors">
          Inactve
        </button>
      </div>
    </div>
  );
}

export default ExtensionFiltler;
