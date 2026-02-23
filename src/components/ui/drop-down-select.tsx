"use client";

import { useMemo, useRef, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type {
  Item,
  FlatItem,
  GroupHeader,
  DropDownSelectProps,
} from "@/src/types";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const DropDownSelect = ({
  items,
  value = [],
  onChange,
}: DropDownSelectProps) => {
  const [selected, setSelected] = useState<string[]>(value);
  const [search, setSearch] = useState("");

  const handleChange = (vals: string[]) => {
    setSelected(vals);
    onChange?.(vals);
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, items]);

  const groupedItems = useMemo(() => {
    const map = new Map<string, Item[]>();
    filteredItems.forEach((item) => {
      if (!map.has(item.group)) map.set(item.group, []);
      map.get(item.group)!.push(item);
    });
    return Array.from(map.entries());
  }, [filteredItems]);

  const flatItems = useMemo(() => {
    const result: FlatItem[] = [];
    groupedItems.forEach(([groupName, groupItems]) => {
      result.push({ type: "group", label: groupName });
      result.push(...groupItems);
    });
    return result;
  }, [groupedItems]);

  const parentRef = useRef<HTMLDivElement>(null);

  const allValues = filteredItems.map((i) => i.value);
  const isAllSelected =
    allValues.length > 0 && allValues.every((val) => selected.includes(val));

  const toggleSelectAll = () => {
    if (isAllSelected) {
      handleChange(selected.filter((val) => !allValues.includes(val)));
    } else {
      handleChange(Array.from(new Set([...selected, ...allValues])));
    }
  };

  const isGroupHeader = (item: FlatItem): item is GroupHeader => "type" in item;

  return (
    <div className="w-full my-4 max-w-xl">
      <div className="flex flex-wrap gap-2 mb-2">
        {selected.map((val) => {
          const selectedItem = items.find((i) => i.value === val);
          return (
            <span
              key={val}
              className="bg-blue-100 text-gray-500 px-2 py-1 rounded"
            >
              {selectedItem ? selectedItem.label : val}
            </span>
          );
        })}
      </div>
      <Listbox value={selected} onChange={handleChange} multiple>
        {({ open }) => {
          const rowVirtualizer = useVirtualizer({
            count: open ? flatItems.length : 0,
            getScrollElement: () => parentRef.current,
            estimateSize: () => 42,
          });

          return (
            <>
              <ListboxButton className="w-full px-4 py-2 border rounded bg-gray-100 flex justify-between items-center">
                <span className="flex-1 text-center text-blue-500">
                  {selected.length === 0
                    ? "Choose and search your products"
                    : `${selected.length} selected`}
                </span>
                <ChevronDownIcon className="w-5 h-5 ml-2 text-gray-500" />
              </ListboxButton>

              {open && (
                <ListboxOptions className="border rounded gap-4">
                  <div className="p-2 border-b">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </div>

                  <div className="p-2 border-b">
                    <button
                      type="button"
                      onClick={toggleSelectAll}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {isAllSelected ? "Clear All" : "Select All"}
                    </button>
                  </div>

                  <div
                    ref={parentRef}
                    className="max-h-60 overflow-auto relative"
                  >
                    <div
                      style={{
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        position: "relative",
                      }}
                    >
                      {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const item = flatItems[virtualRow.index];

                        return (
                          <div
                            key={virtualRow.index}
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              transform: `translateY(${virtualRow.start}px)`,
                            }}
                          >
                            {isGroupHeader(item) ? (
                              <div className="px-4 py-2 text-center border rounded-md text-white font-bold bg-blue-500">
                                {item.label.toUpperCase()}
                              </div>
                            ) : (
                              <ListboxOption value={item.value}>
                                {({ active, selected }) => (
                                  <div
                                    className={`px-4 py-2 cursor-pointer ${
                                      active ? "bg-blue-100" : ""
                                    } ${selected ? "bg-blue-200 font-medium" : ""}`}
                                  >
                                    {item.label}
                                  </div>
                                )}
                              </ListboxOption>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </ListboxOptions>
              )}
            </>
          );
        }}
      </Listbox>
    </div>
  );
};
