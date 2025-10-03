import { useEffect, useRef } from "react";
import { FilterType } from "../utils/sort";
import { X } from "lucide-react";

type FilterPopoverProps = {
  isOpen: boolean;
  onClose: () => void;
  filterType: FilterType;
  value: string;
  onChange: (value: string) => void;
  options?: string[];
  disabled?: boolean;
}

export const FilterPopover: React.FC<FilterPopoverProps> = ({
  isOpen,
  onClose,
  filterType,
  value,
  onChange,
  options,
  disabled = false
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (disabled || !isOpen) return null;

  return (
    <div
      ref={popoverRef}
      className="absolute z-50 mt-2 bg-white border rounded-lg shadow-lg p-3 min-w-[200px]"
      onClick={(e) => e.stopPropagation()}
    >
      {filterType === 'text' && (
        <div>
          <label className="block text-xs font-medium mb-1 text-gray-700">
            Contains text
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Type to filter..."
            className="w-full px-2 py-1 text-sm border rounded"
            autoFocus
          />
        </div>
      )}

      {filterType === 'select' && (
        <div>
          <label className="block text-xs font-medium mb-1 text-gray-700">
            Select value
          </label>
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-2 py-1 text-sm border rounded"
          >
            <option value="">All</option>
            {options?.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      )}

      {filterType === 'dateRange' && (
        <div>
          <label className="block text-xs font-medium mb-1 text-gray-700">
            Date range
          </label>
          <div className="space-y-2">
            <div>
              <label className="block text-xs text-gray-500 mb-0.5">From</label>
              <input
                type="date"
                value={value.includes('|') ? value.split('|')[0] || '' : ''}
                onChange={(e) => {
                  const end = value.includes('|') ? value.split('|')[1] || '' : '';
                  onChange(`${e.target.value}|${end}`);
                }}
                className="w-full px-2 py-1 text-sm border rounded"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-0.5">To</label>
              <input
                type="date"
                value={value.includes('|') ? value.split('|')[1] || '' : ''}
                onChange={(e) => {
                  const start = value.includes('|') ? value.split('|')[0] || '' : '';
                  onChange(`${start}|${e.target.value}`);
                }}
                className="w-full px-2 py-1 text-sm border rounded"
              />
            </div>
          </div>
        </div>
      )}

      {filterType === 'number' && (
        <div>
          <label className="block text-xs font-medium mb-1 text-gray-700">
            Greater than
          </label>
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter amount..."
            className="w-full px-2 py-1 text-sm border rounded"
          />
        </div>
      )}

      {value && (
        <button
          onClick={() => onChange('')}
          className="mt-2 w-full px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center gap-1"
        >
          <X className="w-3 h-3" />
          Clear
        </button>
      )}
    </div>
  );
};