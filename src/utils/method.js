import fs from "fs";

export function getData(data, dataQuery) {
  const listData = JSON.parse(data);
  const newData = listData.filter((item) => {
    for (const key in dataQuery) {
      if (item[key] == dataQuery[key]) {
        return true;
      }
    }
  });

  return newData;
}
// seach by name
export function seachByName(filePath, name) {
  const entities = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const dataSeach = entities.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );
 return dataSeach;
}
// filter data theo query
export function filterData(filePath, dataquery) {
  const conditions = dataquery.split("&").map((condition) => {
    const data = condition.split("=");
    return { key: data[0], value: data[1] };
  });
 const entities = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const dataFilter = entities.filter((entity) =>
    conditions.find((condition) => condition.value == entity[condition.key])
  );
  return dataFilter;
}
