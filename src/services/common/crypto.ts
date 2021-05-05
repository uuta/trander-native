import CryptoJS from "crypto-js";

const pwd = "password";

export class ServiceCrypto {
  /**
   * Encrypt something
   *
   * @param word
   * @returns encrypted text
   */
  static encrypt = (word: string): string => {
    return CryptoJS.AES.encrypt(word, pwd).toString();
  };

  /**
   * Decrypt something
   *
   * @param word
   * @returns decrypted text
   */
  static decrypt = (word: string): string => {
    return CryptoJS.AES.decrypt(word, pwd).toString(CryptoJS.enc.Utf8);
  };
}
