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
