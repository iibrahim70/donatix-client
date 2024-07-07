import { IUserPath, TBarItem } from "@/types";

// Function to generate sidebar items based on user paths and role
const sidebarItemsGenerator = (items: IUserPath[], role: string) => {
  // Reduce the items array to an array of TBarItem objects
  const sidebarItems = items?.reduce((acc: TBarItem[], item) => {
    // Check if the item has a path and label
    if (item?.path && item?.label) {
      // Add the item to the accumulator with a modified path
      acc.push({
        label: item?.label,
        path: `/${role}/dashboard/${item?.path}`,
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
              path: `/${role}/dashboard/${child?.path}`,
            };
          }
        }),
      });
    }

    // Return the updated accumulator
    return acc;
  }, []);

  // Return the generated sidebar items
  return sidebarItems;
};

export default sidebarItemsGenerator;
