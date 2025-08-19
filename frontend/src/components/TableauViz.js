import React, { useEffect, useRef } from "react";

export default function TableauViz({ src, cityFilterField, cityValue }) {
  const ref = useRef(null);

  // Set viz src when component mounts
  useEffect(() => {
    if (!ref.current) return;
    ref.current.setAttribute("src", src);
  }, [src]);

  // Apply filter when city changes
  useEffect(() => {
    async function applyFilter() {
      if (!ref.current || !cityFilterField || !cityValue) return;
      try {
        await ref.current.ready;
        const workbook = ref.current.workbook;
        if (!workbook) return;
        const active = workbook.activeSheet;

        const setFilter = async (ws) => {
          try {
            await ws.setFilterAsync(cityFilterField, [cityValue], "replace");
          } catch {
            /* worksheet may not contain the field */
          }
        };

        if (active.sheetType === "dashboard") {
          for (const ws of active.worksheets) {
            await setFilter(ws);
          }
        } else {
          await setFilter(active);
        }
      } catch (err) {
        console.warn("Tableau filter error:", err);
      }
    }
    applyFilter();
  }, [cityFilterField, cityValue]);

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <tableau-viz
        ref={ref}
        style={{ width: "100%", height: "100%" }}
        toolbar="bottom"
        hide-tabs
        device="desktop"
      />
    </div>
  );
}
