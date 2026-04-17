// src/utils/unetMath.ts

/**
 * Transforms a score from 0-100 to the UNET scale (1.0 to 9.0) based on the specified intervals.
 * The function uses linear interpolation to calculate the corresponding UNET score for each interval.
 * 
 * @param nota100 - The score on a scale of 0 to 100.
 * @returns The corresponding score on the UNET scale (1.0 to 9.0).
 */
export const convertirEscalaUnet = (nota100: number): number => {
  if (nota100 <= 7) return 1.0;
  if (nota100 >= 8 && nota100 <= 16) return 1.0 + ((nota100 - 8) * 0.1);
  if (nota100 >= 17 && nota100 <= 27) return 2.0 + ((nota100 - 17) * 0.1);
  if (nota100 >= 28 && nota100 <= 38) return 3.0 + ((nota100 - 28) * 0.1);
  if (nota100 >= 39 && nota100 <= 50) return 4.0 + ((nota100 - 39) * 0.1); 
  if (nota100 === 51) return 5.0;
  if (nota100 >= 52 && nota100 <= 61) return 5.1 + ((nota100 - 52) * 0.1);
  if (nota100 >= 62 && nota100 <= 72) return 6.0 + ((nota100 - 62) * 0.1);
  if (nota100 >= 73 && nota100 <= 83) return 7.0 + ((nota100 - 73) * 0.1);
  if (nota100 >= 84 && nota100 <= 94) return 8.0 + ((nota100 - 84) * 0.1);
  if (nota100 >= 95) return 9.0;
  
  return 0;
};