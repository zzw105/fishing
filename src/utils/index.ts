import CryptoJS from "crypto-js";

export const KEY = "105";

// 加密并存储
export const cryptoSaveStorage = (key: string, data: string): void => {
  const cryptoData = CryptoJS.AES.encrypt(data, KEY).toString();
  localStorage.setItem(key, cryptoData);
};

export const cryptoLoadStorage = (key: string): string => {
  const data = localStorage.getItem(key);
  if (!data) return "";
  const bytes = CryptoJS.AES.decrypt(data, KEY);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

export const sortFish = <T>(arr: T[], key: string): T[] => {
  return arr.sort((a, b) => {
    return a[key] - b[key];
  });
};

export function randomNum(minNum: number, maxNum: number): number {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1 + "", 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum + "", 10);
      break;
    default:
      return 0;
      break;
  }
}
