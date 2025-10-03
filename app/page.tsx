"use client";

import { activities } from "./data/activities";
import React, { useState, useMemo, useEffect  } from 'react';
import { X } from 'lucide-react';
import { applyFiltersAndSort, FilterConfig, filterUtils, SortConfig, SortFunction, sortUtils } from "./utils/sort";
import { TableHeader } from "./components/TableHeader";

export default function Home() {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, sortFn: null, direction: null });
  const [descriptionFilter, setDescriptionFilter] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [dateFilter, setDateFilter] = useState<string>('');
  const [nameFilter, setNameFilter] = useState<string>('');
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined' || isInitialized) return;

    const params = new URLSearchParams(window.location.search);
    const urlDescription = params.get('description') || '';
    const urlStatus = params.get('status') || '';
    const urlDate = params.get('date') || '';
    const urlName = params.get('name') || '';
    const urlSortKey = params.get('sortKey');
    const urlSortDir = params.get('sortDir') as 'asc' | 'desc' | null;

    if (urlDescription) setDescriptionFilter(urlDescription);
    if (urlStatus) setStatusFilter(urlStatus);
    if (urlDate) setDateFilter(urlDate);
    if (urlName) setNameFilter(urlName);

    if (urlSortKey && urlSortDir) {
      let sortFn: SortFunction;

      if (urlSortKey === 'name' || urlSortKey === 'status') {
        sortFn = urlSortDir === 'asc' ? sortUtils.textAsc : sortUtils.textDesc;
      } else if (urlSortKey === 'date') {
        sortFn = urlSortDir === 'asc' ? sortUtils.dateAsc : sortUtils.dateDesc;
      } else {
        sortFn = urlSortDir === 'asc' ? sortUtils.numberAsc : sortUtils.numberDesc;
      }

      setSortConfig({ key: urlSortKey, sortFn, direction: urlSortDir });
    }

    setIsInitialized(true);
  }, [isInitialized]);


  useEffect(() => {
    const params = new URLSearchParams();

    if (descriptionFilter) params.set('description', descriptionFilter);
    if (statusFilter) params.set('status', statusFilter);
    if (dateFilter) params.set('date', dateFilter);
    if (descriptionFilter) params.set('description', descriptionFilter);
    if (sortConfig.key) {
      params.set('sortKey', sortConfig.key);
      params.set('sortDir', sortConfig.direction!);
    }

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    window.history.replaceState({}, '', newUrl);
  }, [descriptionFilter, statusFilter, dateFilter, nameFilter, sortConfig]);

  const filteredData = useMemo(() => {
    const activeFilters: FilterConfig[] = [
      { key: 'updatedAt', filterFn: filterUtils.dateRange, value: dateFilter },
      { key: 'status', filterFn: filterUtils.textEquals, value: statusFilter },
      { key: 'description', filterFn: filterUtils.textContains, value: descriptionFilter },
      { key: 'user.name', filterFn: filterUtils.textContains, value: nameFilter },
    ];

    return applyFiltersAndSort(activities, activeFilters, sortConfig);
  }, [nameFilter, statusFilter, dateFilter, descriptionFilter, sortConfig]);

  const handleSort = (key: string, sortFnAsc: SortFunction, sortFnDesc: SortFunction): void => {
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') {
        setSortConfig({ key, sortFn: sortFnDesc, direction: 'desc' });
      } else {
        setSortConfig({ key: null, sortFn: null, direction: null });
      }
    } else {
      setSortConfig({ key, sortFn: sortFnAsc, direction: 'asc' });
    }
  };

  const hasActiveFilters = nameFilter || statusFilter || dateFilter || descriptionFilter;

  const clearAllFilters = (): void => {
    setNameFilter('');
    setStatusFilter('');
    setDateFilter('');
    setNameFilter('');
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Actions log</h1>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg flex items-center justify-between">
          <span className="text-sm text-blue-800">
            Active filters applied
          </span>
          <button
            onClick={clearAllFilters}
            className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 rounded flex items-center gap-1"
          >
            <X className="w-3 h-3" />
            Clear all
          </button>
        </div>
      )}

      <div className="mb-2 text-sm text-gray-600">
        Showing {filteredData.length} of {activities.length} records
      </div>

      <div className="overflow-x-auto border rounded-lg min-h-40">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <TableHeader
                label="Date"
                sortKey="updatedAt"
                sortAsc={sortUtils.dateAsc}
                sortDesc={sortUtils.dateDesc}
                sortConfig={sortConfig}
                onSort={handleSort}
                filterType="dateRange"
                filterValue={dateFilter}
                onFilterChange={setDateFilter}
              />
              <TableHeader
                label="Status"
                sortKey="status"
                sortAsc={sortUtils.textAsc}
                sortDesc={sortUtils.textDesc}
                sortConfig={sortConfig}
                onSort={handleSort}
                filterType="select"
                filterValue={statusFilter}
                onFilterChange={setStatusFilter}
                filterOptions={['COMPLETED', 'FAILED', 'IN_PROGRESS']}
              />
              <TableHeader
                label="Description"
                sortKey="description"
                sortAsc={sortUtils.textAsc}
                sortDesc={sortUtils.textDesc}
                sortConfig={sortConfig}
                onSort={handleSort}
                filterType="text"
                filterValue={descriptionFilter}
                onFilterChange={setDescriptionFilter}
              />
              <TableHeader
                label="User"
                sortKey="user.name"
                sortAsc={sortUtils.textAsc}
                sortDesc={sortUtils.textDesc}
                sortConfig={sortConfig}
                onSort={handleSort}
                filterType="text"
                onFilterChange={setNameFilter}
                popoverDisabled={true}
              />
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{new Date(row.updatedAt).toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === 'COMPLETED' ? 'bg-green-600 text-white' :
                    row.status === 'IN_PROGRESS' ? 'bg-yellow-500 text-white' :
                      'bg-red-400 text-white'
                    }`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3">{row.description}</td>
                <td className="px-4 py-3">{row.user.name}</td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-gray-500">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};