const { DateTime } = require("luxon");

const dictBrowsers = require("./data/browsers.dict.js");
const dictSystems = require("./data/operating-systems.dict.js");
const dictLocale = "en-GB";

const browserName = (key) => {
  return dictBrowsers[key] ?? key;
};

const systemName = (key) => {
  return dictSystems[key] ?? key;
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

const getAllTableColumns = (data) => {
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
  return new Intl.NumberFormat(dictLocale).format(cell);
};

const getDataAsPercentage = (data, row, column) => {
  const cell = data[row][column] ?? 0;
  const totalForRow = getTotalOfRow(data, row);
  return new Intl.NumberFormat(dictLocale, {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cell / totalForRow);
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

  return new Intl.NumberFormat(dictLocale, {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: "exceptZero",
  }).format(thisCellPercentage - previousCellPercentage);
};

const htmlTableHeaders = (data, config) => {
  const columns = getAllTableColumns(data) ?? [];
  let output = columns.map(
    (col) =>
      `<th class="kimTable_header" scope="col">${config.columnFormatFunction(
        col
      )}</th>`
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
    let output = cols.map((col) => {
      return `<td class="kimTable_cell">${config.cellFormatFunction(
        data,
        currentRow,
        col
      )}</td>`;
    });

    if (config.truncateColumns) {
      output = output.slice(0, config.truncateColumns);
    }

    return output.join("\n");
  };

  const output = rows.map((row) => {
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
  };
  const config = { ...defaultConfig, ...userConfig };

  return `<table class="kimTable">
    ${
      config.caption
        ? `<caption class="kim-!-sr kimTable_caption">${config.caption}</caption>`
        : ""
    }
    <thead class="kimTable_head">
      <tr>
        <th class="kimTable_header" scope="col">${
          config.firstColumnHeader ?? ""
        }</th>
        ${htmlTableHeaders(data, config)}
      </tr>
    </thead>
    <tbody class="kimTable_body">
      ${htmlTableData(data, config)}
    </tbody>
  </table>`;
};

module.exports = function () {
  const dataDeviceTypes = require("./data/device-types.js");
  const dataOperatingSystems = require("./data/operating-systems.js");
  const dataCombos = require("./data/browser-os-combos.js");
  const dataBrowsers = require("./data/browsers-overall.js");
  const dataBrowsersMobile = require("./data/browsers-mobile.js");
  const dataBrowsersTablet = require("./data/browsers-tablet.js");
  const dataBrowsersDesktop = require("./data/browsers-desktop.js");
  const dataBrowsersTv = require("./data/browsers-tv.js");

  return {
    devices: {
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
        truncateColumns: 10,
      }),
      percent: htmlConvertDataToTable(dataCombos, {
        caption: "Most popular browser and OS combinations - percentages",
        columnFormatFunction: browserSystemName,
        cellFormatFunction: getDataAsPercentage,
        truncateColumns: 10,
      }),
      percentChange: htmlConvertDataToTable(dataCombos, {
        caption: "Most popular browser and OS combinations - changes by month",
        columnFormatFunction: browserSystemName,
        cellFormatFunction: getDataAsPercentChange,
        truncateColumns: 10,
      }),
    },
    browsers: {
      overall: {
        raw: htmlConvertDataToTable(dataBrowsers, {
          caption: "Most popular browsers - raw data",
          columnFormatFunction: browserName,
          truncateColumns: 10,
        }),
        percent: htmlConvertDataToTable(dataBrowsers, {
          caption: "Most popular browsers - percentages",
          columnFormatFunction: browserName,
          cellFormatFunction: getDataAsPercentage,
          truncateColumns: 10,
        }),
        percentChange: htmlConvertDataToTable(dataBrowsers, {
          caption: "Most popular browsers - changes by month",
          columnFormatFunction: browserName,
          cellFormatFunction: getDataAsPercentChange,
          truncateColumns: 10,
        }),
      },
      mobile: {
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
};
