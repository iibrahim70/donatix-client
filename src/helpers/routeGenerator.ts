import { IRoute, IUserPath } from "@/types";

// Function to generate routes from an array of user paths
const routeGenerator = (items: IUserPath[]) => {
  // Reduce the items array to an array of IRoute objects
  const routes = items?.reduce((acc: IRoute[], item) => {
    // Check if the item has a path and an element
    if (item?.path && item?.element) {
      // Add the item to the accumulator as an IRoute object
      acc?.push({
        path: item?.path,
        element: item?.element,
      });
    }

    // Check if the item has children
    if (item?.children) {
      // Iterate over the children and add them to the accumulator as IRoute objects
      item?.children?.forEach((child) => {
        acc?.push({
          path: child?.path,
          element: child?.element,
        });
      });
    }

    // Return the updated accumulator
    return acc;
  }, []);

  // Return the generated routes
  return routes;
};

export default routeGenerator;
