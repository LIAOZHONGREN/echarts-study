/*
 * @Author: your name
 * @Date: 2020-11-09 19:53:46
 * @LastEditTime: 2020-11-09 20:06:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-study\src\common\enums\windowSizeEnum.ts
 */
export enum sizeSpecsEnum {
    XS = 'XS',
    SM = 'SM',
    MD = 'MD',
    LG = 'LG',
    XL = 'XL',
    XXL = 'XXL',
  }
  
  export enum screenEnum {
    XS = 480,
    SM = 576,
    MD = 768,
    LG = 992,
    XL = 1200,
    XXL = 1600,
  }
  
  const screenMap = new Map<sizeSpecsEnum, number>();
  
  screenMap.set(sizeSpecsEnum.XS, screenEnum.XS);
  screenMap.set(sizeSpecsEnum.SM, screenEnum.SM);
  screenMap.set(sizeSpecsEnum.MD, screenEnum.MD);
  screenMap.set(sizeSpecsEnum.LG, screenEnum.LG);
  screenMap.set(sizeSpecsEnum.XL, screenEnum.XL);
  screenMap.set(sizeSpecsEnum.XXL, screenEnum.XXL);
  
  export { screenMap };
  