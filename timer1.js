const args = process.argv.slice(2);

const timer = function (lap) {
  const toNumOnly = [];
  const toNum = lap.map(x => Number(x));
  for (const item of toNum) {
    if (typeof item === "number" && item >= 0) {
      toNumOnly.push(item);
    }
  };

  const ms = toNumOnly.sort((a, b) => a - b);
  const s = ms.map(x => x * 1000);

  for (const time of s) {
    setTimeout(() => {
      process.stdout.write("\x07")
    }, time);
  };
};

timer(args);