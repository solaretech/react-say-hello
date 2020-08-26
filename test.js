const counterMaker = (initialCount) => {
  let c = initialCount;
  console.log(c);
  const increment = () => c++;

  return increment;
}

const count = counterMaker(1);
console.log(count(), count(), count());