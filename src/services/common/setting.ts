import { DIRECTION_TYPES } from "@/const/external";

export class Setting {
  /**
   * Change setting class by value
   *
   * @param {bool} value
   * @return {string}
   */
  judgeSettingIcon(value) {
    return value ? "fa-caret-down" : "fa-caret-right";
  }

  /**
   * Depending on the direction type, return text for direction
   *
   * @param {int} directionType
   * @return {string
   */
  setDirectionText(directionType) {
    const obj = Object.entries(DIRECTION_TYPES).filter(
      (DIRECTION_TYPES) => DIRECTION_TYPES[1].NUM === directionType
    );
    return obj[0][1].TEXT;
  }
}
