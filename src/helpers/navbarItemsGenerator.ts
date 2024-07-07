import { IUserPath, TBarItem } from "@/types";

const navbarItemsGenerator = (items: IUserPath[]) => {
  // Reduce the items array to an array of TBarItem objects
  const navbarItems = items?.reduce((acc: TBarItem[], item) => {
    // Exclude "Home" and "Details" from the navbar
    if (item?.label === "Home" || item?.label?.includes("Details")) {
      return acc;
    }

    // Check if the item has a path and label
    if (item?.path && item?.label) {
      // Add the item to the accumulator as a TBarItem object
      acc.push({
        label: item?.label,
        path: item?.path,
      });
    }

    // Check if the item has children
    if (item?.children) {
      // Add the item with its children to the accumulator
      acc.push({
        label: item?.label as string,
        path: item?.path,
        // Map over the children to create TBarItem objects for each child
        children: item?.children?.map((child) => {
          if (child?.label) {
            return {
              label: child?.label,
              path: child?.path,
            };
          }
        }),
      });
    }

    // Return the updated accumulator
    return acc;
  }, []);

  // Return the generated navbar items
  return navbarItems;
};

export default navbarItemsGenerator;
