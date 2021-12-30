export const isMobileExperience = (): boolean => {
  if (typeof window !== "undefined") {
    return window.matchMedia("only screen and (max-width: 767px)").matches;
  }
}