import { ArrowDown, ArrowUp, ArrowUpDown, Filter } from "lucide-react";
import { FilterType, SortConfig, SortFunction } from "../utils/sort";
import { useCallback, useState } from "react";
import { FilterPopover } from "./FilterPopover";

type TableHeaderProps = {
  label: string;
  sortKey: string;
  sortAsc: SortFunction;
  sortDesc: SortFunction;
  sortConfig: SortConfig;
  onSort: (key: string, sortAsc: SortFunction, sortDesc: SortFunction) => void;
  filterType?: FilterType;
  filterValue?: string;
  onFilterChange?: (value: string) => void;
  filterOptions?: string[];
  popoverDisabled?: boolean;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  label,
  sortKey,
  sortAsc,
  sortDesc,
  sortConfig,
  onSort,
  filterType,
  filterValue = '',
  onFilterChange,
  filterOptions,
  popoverDisabled = false
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const getSortIcon = () => {
    if (sortConfig.key !== sortKey) return <ArrowUpDown className="w-4 h-4" />;
    return sortConfig.direction === 'asc' ?
      <ArrowUp className="w-4 h-4" /> :
      <ArrowDown className="w-4 h-4" />;
  };

  const handleSort = useCallback(() => {
    onSort(sortKey, sortAsc, sortDesc);
  }, [onSort, sortKey, sortAsc, sortDesc]);

  const hasActiveFilter = filterValue !== '' && filterValue !== null && filterValue !== undefined;

  return (
    <th className="px-4 py-3 text-left relative">
      <div className="flex items-center gap-2">
        <button
          onClick={handleSort}
          className="flex items-center gap-1 font-semibold hover:text-blue-600"
        >
          {label} {getSortIcon()}
        </button>

        {filterType && onFilterChange && !popoverDisabled && (
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFilterOpen(!isFilterOpen);
              }}
              className={`p-1 rounded hover:bg-gray-200 ${hasActiveFilter ? 'bg-blue-100 text-blue-600' : 'text-gray-400'
                }`}
              title="Filter"
            >
              <Filter className="w-4 h-4" />
            </button>

            <FilterPopover
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              filterType={filterType}
              value={filterValue}
              onChange={onFilterChange}
              options={filterOptions}
            />
          </div>
        )}
      </div>
    </th>
  );
};