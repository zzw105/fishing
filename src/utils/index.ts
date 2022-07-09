import { userStore } from "./../pinia/user";
import CryptoJS from "crypto-js";

export const KEY = "105";

// 加密并存储存档
export const cryptoSaveStorage = (key: string, data: string): void => {
  const cryptoData = CryptoJS.AES.encrypt(data, KEY).toString();
  localStorage.setItem(key, cryptoData);
};

// 读取加密存档
export const cryptoLoadStorage = (key: string): string => {
  const data = localStorage.getItem(key);
  if (!data) return "";
  const bytes = CryptoJS.AES.decrypt(data, KEY);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

// 排序鱼
export const sortFish = <T>(arr: T[], key: string): T[] => {
  return arr.sort((a, b) => {
    return a[key] - b[key];
  });
};

// 生成minNum到maxNum的随机数
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

// 处理用户的仓库的内容
// export const setUserItem = (id: number) => {
//   const userItem = userStore().items;
//   const userFish = userStore().fish;
//   if(id<300){

//   }
// };
