export function getData(data) {
  const dates = [];
  const cases_sum = [];
  const daily_new = [];
  const first_row = data.split("\n")[0].split(",");

  for (var i = 4; i < first_row.length; ++i) {
    var date = first_row[i].substring(0, 4);
    if (date[date.length - 1] === "/") {
      date = date.substring(0, 3);
    }
    dates.push(date);
  }

  const second_row = data.split("\n").slice(1)[0].split(",");

  for (var j = 4; j < second_row.length; ++j) {
    cases_sum.push(parseInt(second_row[j]));
  }

  const rows_after_two = data.split("\n").slice(2);
  for (var k = 0; k < rows_after_two.length; ++k) {
    const cols = rows_after_two[k].split(",");
    for (var l = 4; l < cols.length; ++l) {
      cases_sum[l] += parseInt(cols[l]);
    }
  }

  daily_new.push(cases_sum[0]);

  for (var m = 1; m < cases_sum.length; ++m) {
    daily_new.push(cases_sum[m] - cases_sum[m - 1]);
  }

  return { dates, cases_sum, daily_new };
}
