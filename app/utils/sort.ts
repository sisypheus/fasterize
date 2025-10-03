export type SortFunction = (a: any, b: any, key: string) => number;

export type FilterValue = string | number | null | undefined;

export type FilterFunction = (value: any, filterValue: FilterValue) => boolean;

export type FilterType = 'text' | 'select' | 'date' | 'dateRange' | 'number';

export type SortConfig = {
  key: string | null;
  sortFn: SortFunction | null;
  direction: 'asc' | 'desc' | null;
}

export type FilterConfig = {
  key: string;
  filterFn: FilterFunction;
  value: FilterValue;
}

export const filterUtils: Record<string, FilterFunction> = {
  textContains: (value: any, filterValue: FilterValue): boolean =>
    String(value).toLowerCase().includes(String(filterValue).toLowerCase()),

  textEquals: (value: any, filterValue: FilterValue): boolean =>
    String(value).toLowerCase() === String(filterValue).toLowerCase(),

  dateEquals: (value: any, filterValue: FilterValue): boolean =>
    new Date(value).toDateString() === new Date(String(filterValue)).toDateString(),

  dateBefore: (value: any, filterValue: FilterValue): boolean =>
    new Date(value) < new Date(String(filterValue)),

  dateAfter: (value: any, filterValue: FilterValue): boolean =>
    new Date(value) > new Date(String(filterValue)),

  dateRange: (value: any, filterValue: FilterValue): boolean => {
    if (!filterValue || typeof filterValue !== 'string' || filterValue === '|') return true;
    const [start, end] = filterValue.split('|');
    const date = new Date(value);
    const startDate = start && start.trim() ? new Date(start) : null;
    const endDate = end && end.trim() ? new Date(end) : null;

    console.log(startDate)
    console.log(endDate)
    if (startDate && endDate) {
      return date >= startDate && date <= endDate;
    } else if (startDate) {
      return date >= startDate;
    } else if (endDate) {
      return date <= endDate;
    }
    return true;
  },

  numberEquals: (value: any, filterValue: FilterValue): boolean =>
    Number(value) === Number(filterValue),

  numberGreater: (value: any, filterValue: FilterValue): boolean =>
    Number(value) > Number(filterValue),

  numberLess: (value: any, filterValue: FilterValue): boolean =>
    Number(value) < Number(filterValue),
};

export const sortUtils: Record<string, SortFunction> = {
  textAsc: (a: any, b: any, key: string): number =>
    String(getNestedValue(a, key)).localeCompare(String(getNestedValue(b, key))),
  textDesc: (a: any, b: any, key: string): number =>
    String(getNestedValue(b, key)).localeCompare(String(getNestedValue(a, key))),
  dateAsc: (a: any, b: any, key: string): number =>
    new Date(getNestedValue(a, key)).getTime() - new Date(getNestedValue(b, key)).getTime(),
  dateDesc: (a: any, b: any, key: string): number =>
    new Date(getNestedValue(b, key)).getTime() - new Date(getNestedValue(a, key)).getTime(),
  numberAsc: (a: any, b: any, key: string): number =>
    Number(getNestedValue(a, key)) - Number(getNestedValue(b, key)),
  numberDesc: (a: any, b: any, key: string): number =>
    Number(getNestedValue(b, key)) - Number(getNestedValue(a, key)),
};

export const applyFiltersAndSort = <T extends Record<string, any>>(
  data: T[],
  filters: FilterConfig[],
  sortConfig: SortConfig
): T[] => {
  let result = [...data];

  filters.forEach(({ key, filterFn, value }) => {
    if (value !== '' && value !== null && value !== undefined) {
      result = result.filter(item => filterFn(getNestedValue(item, key), value));
    }
  });

  if (sortConfig.key && sortConfig.sortFn) {
    result.sort((a, b) => sortConfig.sortFn!(a, b, sortConfig.key!));
  }

  return result;
};

const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};