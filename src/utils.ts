import mooncatparser from "./lib/mooncatparser";

export const short = (s: string): string =>
  `${s.substr(0, 5)}...${s.substr(s.length - 5, 5)}`;

export const THROWS = (): void => {
  throw new Error("must be implemented");
};

export const ASYNC_THROWS = async (): Promise<void> => {
  throw new Error("must be implemented");
};

export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const timeIt = <T>(msg: string, callable: CallableFunction): T => {
  console.time(msg);
  const res: T = callable();
  console.timeEnd(msg);
  return res;
};

export const timeItAsync = async <T>(
  msg: string,
  callable: CallableFunction
): Promise<T> => {
  console.time(msg);
  const res: T = await callable();
  console.timeEnd(msg);
  return res;
};

export const WRAPPER = "0x7c40c393dc0f283f318791d746d894ddd3693572";

export const hexToAscii = (str1: string): string => {
  const hex = str1.slice(2).toString();
  let str = "";
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
};

export const calculatePrice = (price: string): number =>
  Number(price) / 1000000 / 1000000 / 1000000;

export function drawCat(catId: string, size: number): string {
  size = size || 10;
  const data = mooncatparser(catId);
  const canvas = document.createElement("canvas");
  canvas.width = size * data.length;
  canvas.height = size * data[1].length;
  const ctx = canvas.getContext("2d");

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      const color = data[i][j];
      if (color && ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(i * size, j * size, size, size);
      }
    }
  }
  return canvas.toDataURL();
}
