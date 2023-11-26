import { Cinzel, Open_Sans } from "next/font/google";

export const cinzel = Cinzel({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const openSans = Open_Sans({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
