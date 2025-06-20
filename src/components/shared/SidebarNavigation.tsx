import { sidebarItems } from "@/assets/data/sidebar-items";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui";

export const SidebarNavigation = () => {
  return (
    <Accordion type="multiple" className="space-y-2">
      {sidebarItems?.map((item) => {
        const Icon = item?.icon;

        return (
          <AccordionItem
            key={item?.id}
            value={item?.id}
            className="border-none"
          >
            {item?.children ? (
              <>
                <AccordionTrigger className="p-2.5 bg-transparent hover:bg-black/50 transition-colorss duration-300 rounded-lg hover:no-underline text-sm font-normal cursor-pointer">
                  <div className="flex items-center gap-3">
                    {Icon && <Icon className="size-4" />}
                    <span>{item?.label}</span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-1.5 flex flex-col gap-1">
                  {item?.children?.map((child) => {
                    const ChildIcon = child?.icon;

                    return (
                      <Link
                        key={child?.id}
                        href={child?.path}
                        className="inline-flex items-center gap-2.5 mx-5 text-white/70 py-1.5 px-2.5 rounded-sm bg-midnight-slate/70 hover:bg-black/30 transition text-sm font-normal"
                      >
                        {ChildIcon && <ChildIcon className="size-4" />}
                        <span>{child?.label}</span>
                      </Link>
                    );
                  })}
                </AccordionContent>
              </>
            ) : (
              <Link
                href={item?.path}
                className="w-full inline-flex items-center gap-2 bg-transparent p-2.5 font-normal text-sm hover:bg-black/50 transition-colors duration-300 rounded-lg"
              >
                {Icon && <Icon className="size-4" />}
                <span>{item?.label}</span>
              </Link>
            )}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
