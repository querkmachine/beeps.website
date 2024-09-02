const { DateTime } = require("luxon");

const dictBrowsers = require("./data/browsers.dict.js");
const dictSystems = require("./data/operating-systems.dict.js");

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
      return "Smart TV and games console";
  }
};

const formatNumber = (num) => {
  return new Intl.NumberFormat("en").format(num);
};

const formatDate = (isoDate) => {
  return DateTime.fromISO(isoDate).toLocaleString({
    year: "numeric",
    month: "long",
  });
};

const getAllTableRows = (data) => {
  return Object.keys(data);
};

const getAllTableColumns = (data) => {
  const rows = new Set();

  // Loop through the months
  for (const month in data) {
    // As sets can only have unique values, this effectively creates a list only
    // containing unique values.
    for (const key in data[month]) {
      rows.add(key);
    }
  }

  return Array.from(rows);
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
      const num = data[currentRow][col] ?? 0;
      return `<td class="kimTable_cell">${formatNumber(num)}</td>`;
    });

    if (config.truncateColumns) {
      output = output.slice(0, config.truncateColumns);
    }

    return output.join("\n");
  };

  const output = rows.map(
    (row) => `<tr>
      <th class="kimTable_header" scope="row">${formatDate(row)}</th>
      ${htmlTableColumns(cols, row)}
    </tr>`
  );
  return output.join("\n");
};

const htmlConvertDataToTable = (data, userConfig = {}) => {
  const defaultConfig = {
    firstColumnHeader: "",
    columnFormatFunction: (str) => str,
    truncateColumns: null,
  };
  const config = { ...defaultConfig, ...userConfig };

  return `<table class="kimTable">
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
  return {
    table: {
      devices: htmlConvertDataToTable(require("./data/device-types.js"), {
        columnFormatFunction: deviceName,
        firstColumnHeader: "Month",
      }),
      systems: htmlConvertDataToTable(require("./data/operating-systems.js"), {
        columnFormatFunction: systemName,
        firstColumnHeader: "Month",
      }),
      combos: htmlConvertDataToTable(require("./data/browser-os-combos.js"), {
        columnFormatFunction: browserSystemName,
        firstColumnHeader: "Month",
        truncateColumns: 10,
      }),
      browsers: {
        overall: htmlConvertDataToTable(require("./data/browsers-overall.js"), {
          columnFormatFunction: browserName,
          firstColumnHeader: "Month",
          truncateColumns: 10,
        }),
        mobile: htmlConvertDataToTable(require("./data/browsers-mobile.js"), {
          columnFormatFunction: browserName,
          firstColumnHeader: "Month",
        }),
        tablet: htmlConvertDataToTable(require("./data/browsers-tablet.js"), {
          columnFormatFunction: browserName,
          firstColumnHeader: "Month",
        }),
        desktop: htmlConvertDataToTable(require("./data/browsers-desktop.js"), {
          columnFormatFunction: browserName,
          firstColumnHeader: "Month",
        }),
        tv: htmlConvertDataToTable(require("./data/browsers-tv.js"), {
          columnFormatFunction: browserName,
          firstColumnHeader: "Month",
        }),
      },
    },
  };
};
