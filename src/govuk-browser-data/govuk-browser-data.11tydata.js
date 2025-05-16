import { DateTime } from "luxon";

import dictBrowsers from "./data/browsers.dict.js";
import dictSystems from "./data/operating-systems.dict.js";

import dataDeviceTypes from "./data/device-types.js";
import dataOperatingSystems from "./data/operating-systems.js";
import dataCombos from "./data/browser-os-combos.js";
import dataBrowsers from "./data/browsers-overall.js";
import dataBrowsersMobile from "./data/browsers-mobile.js";
import dataBrowsersTablet from "./data/browsers-tablet.js";
import dataBrowsersDesktop from "./data/browsers-desktop.js";
import dataBrowsersTv from "./data/browsers-tv.js";

const dictLocale = "en-GB";

const browserName = (key) => {
  return dictBrowsers[key] ?? key;
};

const browserColor = (key) => {
  const seriesStyles = {
    "android-webview": { color: "#a4c639", point: "rect", dashed: true },
    chrome: { color: "#34a853", point: "rect" },
    edge: { color: "#00a1f1", point: "triangle" },
    firefox: { color: "#e66000", point: "rectRot" },
    "mozilla-compatible": { color: "#e6a800" },
    opera: { color: "#cc0f16", point: "crossRot", radius: 8 },
    safari: { color: "#777777", point: "circle", radius: 5 },
    "safari-webview": {
      color: "#999999",
      point: "circle",
      radius: 5,
      dashed: true,
    },
    samsung: { color: "#7781fe", point: "star", radius: 8 },
    silk: { color: "#00a5b8", point: "cross", radius: 8 },
    whale: { color: "#06c3a7" },
    yandex: { color: "#ffcc00", point: "rectRounded", radius: 5 },
    "not-set": { color: "#dedede", point: "line" },
  };

  return {
    fill: "origin",
    borderColor: seriesStyles[key]?.color ?? "#999999",
    borderDash: seriesStyles[key]?.dashed ? [5, 5] : undefined,
    backgroundColor: seriesStyles[key]?.color ?? "#999999",
    pointBackgroundColor: seriesStyles[key]?.color ?? "#999999",
    pointStyle: seriesStyles[key]?.point ?? "rectRounded",
    pointRadius: 0,
    showLine: false,
  };
};

const systemName = (key) => {
  return dictSystems[key] ?? key;
};

const systemColor = (key) => {
  const seriesStyles = {
    android: { color: "#a4c639", point: "rect", dashed: true },
    "chrome-os": { color: "#34a853", point: "rect" },
    ios: { color: "#5fc9f8", point: "circle", radius: 5, dashed: true },
    linux: { color: "#dd4814", point: "rectRot" },
    macos: { color: "#1d1d1f", point: "circle", radius: 5 },
    windows: { color: "#0078d7", point: "triangle" },
  };

  return {
    fill: "origin",
    borderColor: seriesStyles[key]?.color ?? "#999999",
    borderDash: seriesStyles[key]?.dashed ? [5, 5] : undefined,
    backgroundColor: seriesStyles[key]?.color ?? "#999999",
    pointBackgroundColor: seriesStyles[key]?.color ?? "#999999",
    pointStyle: seriesStyles[key]?.point ?? "rectRounded",
    pointRadius: 0,
    showLine: false,
  };
};

const browserSystemName = (comboKey) => {
  const parts = comboKey.split(":");
  return `${browserName(parts[0])} &amp; ${systemName(parts[1])}`;
};

const deviceName = (key) => {
  switch (key) {
    case "mobile":
      return "Mobile";
    case "tablet":
      return "Tablet";
    case "desktop":
      return "Desktop";
    case "tv":
      return "Smart TV and games consoles";
  }
};

const formatDate = (isoDate) => {
  return DateTime.fromISO(isoDate).toLocaleString({
    year: "numeric",
    month: "long",
  });
};

const formatNumber = (num) => {
  return new Intl.NumberFormat(dictLocale).format(num);
};

const formatPercentage = (num) => {
  return new Intl.NumberFormat(dictLocale, {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
};

const formatPercentChange = (num) => {
  return new Intl.NumberFormat(dictLocale, {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: "exceptZero",
  }).format(num);
};

const getTotalOfRow = (data, row) => {
  let total = 0;
  for (const column in data[row]) {
    total += data[row][column] ?? 0;
  }
  return total;
};

const getAllTableRows = (data) => {
  return Object.keys(data);
};

const getAllTableColumns = (data, filterNotSet = false) => {
  // We need to do some funky stuff here as we want to:
  // 1. Get all column headers that exist in the entire data set, including
  //    ones that might only exist in a single month.
  // 2. Have those headings put in descending order according to the data
  //    available for the most recent month.
  // 3. In case of a tie, sort all tied headers alphabetically instead.
  //
  // This takes advantage of Maps only allowing unique keys to avoid adding
  // duplicates (like objects) whilst being convertible to arrays for sorting.
  let cols = new Map();

  // Get the data for the last month
  const months = Object.keys(data);
  const lastMonthData = data[months[months.length - 1]];

  // Loop through the months and then the keys within that month
  for (const month in data) {
    for (const key in data[month]) {
      // Skip over 'not-set' if configured to
      if (filterNotSet && key === "not-set") {
        continue;
      }

      // Add the key to the map with the most recent data, if there is any
      cols.set(key, lastMonthData[key] ?? 0);
    }
  }

  // Sort alphabetically by the key name
  cols = new Map([...cols.entries()].sort((a, b) => b[0] - a[0]));

  // Sort numerically by the most recent data
  cols = new Map([...cols.entries()].sort((a, b) => b[1] - a[1]));

  // Take our sorted map and return just the keys from it as an array
  return [...cols.entries()].map((col) => col[0]);
};

const getData = (data, row, column) => {
  const cell = data[row][column] ?? 0;
  return formatNumber(cell);
};

const getDataAsPercentage = (data, row, column) => {
  const cell = data[row][column] ?? 0;
  const totalForRow = getTotalOfRow(data, row);

  return formatPercentage(cell / totalForRow);
};

const getDataAsPercentChange = (data, row, column) => {
  // This function just receives the key of the row, so we need to work out
  // what the previous row actually was a little more manually...
  let previousRow = null;
  for (const month in data) {
    if (month === row) {
      break;
    }
    previousRow = month;
  }

  // If there is no previous row we're on the first row of data,
  // so there's nothing to calculate a change against
  if (!previousRow) {
    return "&ndash;";
  }

  // Traverse the previous row's data and calculate the percentage it got there
  const previousCellPercentage =
    (data[previousRow][column] ?? 0) / getTotalOfRow(data, previousRow);

  // Traverse this row's data and calculate the percentage here
  const thisCellPercentage =
    (data[row][column] ?? 0) / getTotalOfRow(data, row);

  return formatPercentChange(thisCellPercentage - previousCellPercentage);
};

const htmlTableHeaders = (data, config) => {
  const columns = getAllTableColumns(data) ?? [];
  let output = columns.map(
    (col) =>
      `<th class="kimTable_header" scope="col">${config.columnFormatFunction(
        col,
      )}</th>`,
  );

  if (config.truncateColumns) {
    output = output.slice(0, config.truncateColumns);
  }

  return output.join("\n");
};

const htmlTableData = (data, config) => {
  const cols = getAllTableColumns(data) ?? [];
  const rows = getAllTableRows(data) ?? [];

  const htmlTableColumns = (cols, currentRow) => {
    let columnTotal = 0;

    let output = cols.map((col) => {
      columnTotal += data ?? 0;
      return `<td class="kimTable_cell">${config.cellFormatFunction(
        data,
        currentRow,
        col,
      )}</td>`;
    });

    if (config.truncateColumns) {
      output = output.slice(0, config.truncateColumns);
    }

    if (config.totalColumn) {
      output.push(`<td class="kimTable_cell">AAAAA</td>`);
    }

    return output.join("\n");
  };

  const output = rows.reverse().map((row) => {
    return `<tr>
        <th class="kimTable_header" scope="row">${formatDate(row)}</th>
        ${htmlTableColumns(cols, row)}
      </tr>`;
  });
  return output.join("\n");
};

const htmlConvertDataToTable = (data, userConfig = {}) => {
  const defaultConfig = {
    caption: null,
    firstColumnHeader: "Month",
    columnFormatFunction: (str) => str,
    cellFormatFunction: getData,
    truncateColumns: null,
    totalColumn: false, // does not work yet
  };
  const config = { ...defaultConfig, ...userConfig };

  return `<table class="kimTable">
    ${
      config.caption
        ? `<caption class="kim-!-visually-hidden kimTable_caption">${config.caption}</caption>`
        : ""
    }
    <thead class="kimTable_head">
      <tr>
        <th class="kimTable_header" scope="col">${
          config.firstColumnHeader ?? ""
        }</th>
        ${htmlTableHeaders(data, config)}
        ${
          config.totalColumn
            ? `<th class="kimTable_header" scope="col">Total</th>`
            : ""
        }
      </tr>
    </thead>
    <tbody class="kimTable_body">
      ${htmlTableData(data, config)}
    </tbody>
  </table>`;
};

const chartConvertDataToChartObject = (data, userConfig = {}) => {
  const defaultConfig = {
    seriesFormatFunction: (str) => str,
    seriesStyleFunction: () => null,
    truncateSeries: 5,
  };
  const config = { ...defaultConfig, ...userConfig };

  const datasetColors = ["#786999", "#968AB0", "#B4ACC6", "#D2CDDD", "#F0EEF4"];

  const series = getAllTableColumns(data) ?? []; // Browsers/OSes
  const dates = getAllTableRows(data) ?? []; // Dates
  let datasets = [];

  series.forEach((s, i) => {
    const returnData = [];

    dates.forEach((d) => {
      const dateTotal = Object.values(data[d]).reduce(
        (acc, val) => acc + val,
        0,
      );

      returnData.push((data[d][s] ?? 0) / dateTotal);
    });

    datasets.push({
      label: config.seriesFormatFunction(s),
      data: returnData,
      fill: "origin",
      borderColor: "rgba(0, 0, 0, .1)",
      backgroundColor: datasetColors[i] ?? "#999999",
      pointBackgroundColor: datasetColors[i] ?? "#999999",
      pointStyle: "circle",
      pointRadius: 0,
    });
  });

  return {
    labels: dates,
    datasets: datasets.slice(0, config.truncateSeries),
  };
};

export default function () {
  return {
    devices: {
      chart: chartConvertDataToChartObject(dataDeviceTypes, {
        seriesFormatFunction: deviceName,
      }),
      raw: htmlConvertDataToTable(dataDeviceTypes, {
        caption: "Device types - raw data",
        columnFormatFunction: deviceName,
      }),
      percent: htmlConvertDataToTable(dataDeviceTypes, {
        caption: "Device types - percentages",
        columnFormatFunction: deviceName,
        cellFormatFunction: getDataAsPercentage,
      }),
      percentChange: htmlConvertDataToTable(dataDeviceTypes, {
        caption: "Device types - changes by month",
        columnFormatFunction: deviceName,
        cellFormatFunction: getDataAsPercentChange,
      }),
    },
    systems: {
      chart: chartConvertDataToChartObject(dataOperatingSystems, {
        seriesFormatFunction: systemName,
        seriesStyleFunction: systemColor,
      }),
      raw: htmlConvertDataToTable(dataOperatingSystems, {
        caption: "Operating systems - raw data",
        columnFormatFunction: systemName,
      }),
      percent: htmlConvertDataToTable(dataOperatingSystems, {
        caption: "Operating systems - percentages",
        columnFormatFunction: systemName,
        cellFormatFunction: getDataAsPercentage,
      }),
      percentChange: htmlConvertDataToTable(dataOperatingSystems, {
        caption: "Operating systems - changes by month",
        columnFormatFunction: systemName,
        cellFormatFunction: getDataAsPercentChange,
      }),
    },
    combos: {
      raw: htmlConvertDataToTable(dataCombos, {
        caption: "Most popular browser and OS combinations - raw data",
        columnFormatFunction: browserSystemName,
        truncateColumns: 20,
      }),
      percent: htmlConvertDataToTable(dataCombos, {
        caption: "Most popular browser and OS combinations - percentages",
        columnFormatFunction: browserSystemName,
        cellFormatFunction: getDataAsPercentage,
        truncateColumns: 20,
      }),
      percentChange: htmlConvertDataToTable(dataCombos, {
        caption: "Most popular browser and OS combinations - changes by month",
        columnFormatFunction: browserSystemName,
        cellFormatFunction: getDataAsPercentChange,
        truncateColumns: 20,
      }),
    },
    browsers: {
      overall: {
        chart: chartConvertDataToChartObject(dataBrowsers, {
          seriesFormatFunction: browserName,
          seriesStyleFunction: browserColor,
        }),
        raw: htmlConvertDataToTable(dataBrowsers, {
          caption: "All browsers - raw data",
          columnFormatFunction: browserName,
        }),
        percent: htmlConvertDataToTable(dataBrowsers, {
          caption: "All browsers - percentages",
          columnFormatFunction: browserName,
          cellFormatFunction: getDataAsPercentage,
        }),
        percentChange: htmlConvertDataToTable(dataBrowsers, {
          caption: "All browsers - changes by month",
          columnFormatFunction: browserName,
          cellFormatFunction: getDataAsPercentChange,
        }),
      },
      mobile: {
        chart: chartConvertDataToChartObject(dataBrowsersMobile, {
          seriesFormatFunction: browserName,
          seriesStyleFunction: browserColor,
        }),
        raw: htmlConvertDataToTable(dataBrowsersMobile, {
          caption: "Mobile browsers - raw data",
          columnFormatFunction: browserName,
        }),
        percent: htmlConvertDataToTable(dataBrowsersMobile, {
          caption: "Mobile browsers - percentages",
          columnFormatFunction: browserName,
          cellFormatFunction: getDataAsPercentage,
        }),
        percentChange: htmlConvertDataToTable(dataBrowsersMobile, {
          caption: "Mobile browsers - changes by month",
          columnFormatFunction: browserName,
          cellFormatFunction: getDataAsPercentChange,
        }),
      },
      tablet: {
        chart: chartConvertDataToChartObject(dataBrowsersTablet, {
          seriesFormatFunction: browserName,
          seriesStyleFunction: browserColor,
        }),
        raw: htmlConvertDataToTable(dataBrowsersTablet, {
          captions: "Tablet browsers - raw data",
          columnFormatFunction: browserName,
        }),
        percent: htmlConvertDataToTable(dataBrowsersTablet, {
          captions: "Tablet browsers - percentages",
          columnFormatFunction: browserName,
          cellFormatFunction: getDataAsPercentage,
        }),
        percentChange: htmlConvertDataToTable(dataBrowsersTablet, {
          captions: "Tablet browsers - changes by month",
          columnFormatFunction: browserName,
          cellFormatFunction: getDataAsPercentChange,
        }),
      },
      desktop: {
        chart: chartConvertDataToChartObject(dataBrowsersDesktop, {
          seriesFormatFunction: browserName,
          seriesStyleFunction: browserColor,
        }),
        raw: htmlConvertDataToTable(dataBrowsersDesktop, {
          captions: "Desktop browsers - raw data",
          columnFormatFunction: browserName,
        }),
        percent: htmlConvertDataToTable(dataBrowsersDesktop, {
          captions: "Desktop browsers - percentages",
          columnFormatFunction: browserName,
          cellFormatFunction: getDataAsPercentage,
        }),
        percentChange: htmlConvertDataToTable(dataBrowsersDesktop, {
          captions: "Desktop browsers - changes by month",
          columnFormatFunction: browserName,
          cellFormatFunction: getDataAsPercentChange,
        }),
      },
      tv: {
        chart: chartConvertDataToChartObject(dataBrowsersTv, {
          seriesFormatFunction: browserName,
          seriesStyleFunction: browserColor,
        }),
        raw: htmlConvertDataToTable(dataBrowsersTv, {
          captions: "Smart TV and game console browsers - raw data",
          columnFormatFunction: browserName,
        }),
        percent: htmlConvertDataToTable(dataBrowsersTv, {
          captions: "Smart TV and game console browsers - percentages",
          columnFormatFunction: browserName,
          cellFormatFunction: getDataAsPercentage,
        }),
        percentChange: htmlConvertDataToTable(dataBrowsersTv, {
          captions: "Smart TV and game console browsers - changes by month",
          columnFormatFunction: browserName,
          cellFormatFunction: getDataAsPercentChange,
        }),
      },
    },
  };
}
