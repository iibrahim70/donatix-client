import { useTheme } from "@/providers/ThemeProvider";

export const useSkeletonTheme = () => {
  const theme = useTheme();

  const skeletonBaseColor = theme.theme === "dark" ? "#212121" : "#f0f0f0"; // For baseColor
  const skeletonHighlightColor = theme.theme === "dark" ? "#424242" : "#d0d0d0"; // For highlightColor

  return { skeletonBaseColor, skeletonHighlightColor };
};
