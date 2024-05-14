// function Hq<T>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }

interface Hqi {
  length: number;
}

function Hq <T extends Hqi> (arg: T): T {
  console.log(arg.length);

  return arg
}

const hq = Hq("haqfafsfi")
console.log(hq);

const hqi = Hq({length: 2222})