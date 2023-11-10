
import { getAllItems } from "./db.util.js";

// seach by name user_name
export async function seachByName(model, name) {
  const entities = await getAllItems(model);
  const dataSeach = entities.filter((item) =>
    item.user_name.toLowerCase().includes(name.toLowerCase())
  );
  return dataSeach;
}
// filter data theo query
export async function filterData(model, dataquery) {
  const conditions = dataquery.split("&").map((condition) => {
    const data = condition.split("=");
    return { key: data[0], value: data[1] };
  });
  const entities = await getAllItems(model);
  const dataFilter = entities.filter((entity) =>
    conditions.find((condition) => condition.value == entity[condition.key])
  );
  return dataFilter;
}
