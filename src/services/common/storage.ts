import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

export class ServiceStorage {
  /**
   * e.g Set object
   */
  static async setObject(): Promise<void> {
    await Storage.set({
      key: "user",
      value: JSON.stringify({
        id: 1,
        name: "Max",
      }),
    });
  }

  /**
   * Get a value by key
   *
   * @param key Key of Storage
   */
  static async getValue(key: string): Promise<string | null> {
    const ret = await Storage.get({ key: key });
    return ret.value;
  }

  /**
   * Set an item
   *
   * @param key Key of Storage
   * @param value Value of Storage
   */
  static async setItem(key: string, value: string): Promise<void> {
    await Storage.set({
      key: key,
      value: value,
    });
  }

  /**
   * Get an item
   *
   * @param key Key of Storage
   * @returns value
   */
  static async getItem(key: string): Promise<string | null> {
    const { value } = await Storage.get({ key: key });
    return value;
  }

  /**
   * Remove an item
   *
   * @param key Key of Storage
   */
  static async removeItem(key: string): Promise<void> {
    await Storage.remove({ key: key });
  }

  /**
   * Get all keys
   */
  static async keys(): Promise<string[]> {
    const { keys } = await Storage.keys();
    return keys;
  }

  /**
   * Clear all keys and values
   */
  static async clear(): Promise<void> {
    await Storage.clear();
  }
}
