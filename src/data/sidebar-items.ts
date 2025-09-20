import {
  LayoutDashboard,
  HandHeart,
  CircleDollarSign,
  Users,
  User,
  Megaphone,
  Settings,
  SlidersHorizontal,
  CreditCard,
  FilePlus2,
  FileText,
  CalendarDays,
  Newspaper,
  ShieldCheck,
  DollarSign,
  Building,
  BookOpenCheck,
} from "lucide-react";

export const sidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "campaigns",
    label: "Campaigns",
    icon: Megaphone,
    children: [
      {
        id: "campaigns-view",
        label: "View All",
        path: "/dashboard/campaigns",
        icon: FileText,
      },
      {
        id: "campaigns-create",
        label: "Create",
        path: "/dashboard/campaigns/create",
        icon: FilePlus2,
      },
    ],
  },
  {
    id: "events",
    label: "Events",
    icon: CalendarDays,
    children: [
      {
        id: "events-view",
        label: "View All",
        path: "/dashboard/events",
        icon: FileText,
      },
      {
        id: "events-create",
        label: "Create",
        path: "/dashboard/events/create",
        icon: FilePlus2,
      },
    ],
  },
  {
    id: "blogs",
    label: "Blogs",
    icon: Newspaper,
    children: [
      {
        id: "blogs-view",
        label: "View All",
        path: "/dashboard/blogs",
        icon: FileText,
      },
      {
        id: "blogs-create",
        label: "Create",
        path: "/dashboard/blogs/create",
        icon: FilePlus2,
      },
    ],
  },
  {
    id: "users",
    label: "Users",
    icon: Users,
    children: [
      {
        id: "users-donors",
        label: "Donors",
        path: "/dashboard/users/donors",
        icon: User,
      },
      {
        id: "users-admins",
        label: "Admins",
        path: "/dashboard/users/admins",
        icon: ShieldCheck,
      },
      {
        id: "users-orgs",
        label: "Organizations",
        path: "/dashboard/users/organizations",
        icon: Building,
      },
    ],
  },
  {
    id: "testimonials",
    label: "Testimonials",
    icon: BookOpenCheck,
    children: [
      {
        id: "testimonials-view",
        label: "View All",
        path: "/dashboard/testimonials",
        icon: FileText,
      },
      {
        id: "testimonials-create",
        label: "Create",
        path: "/dashboard/testimonials/create",
        icon: FilePlus2,
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: DollarSign,
    children: [
      {
        id: "pricing-user",
        label: "User Pricing",
        path: "/dashboard/pricing/user",
        icon: User,
      },
      {
        id: "pricing-org",
        label: "Org Pricing",
        path: "/dashboard/pricing/organization",
        icon: Building,
      },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    icon: HandHeart,
    children: [
      {
        id: "payments-user-subscription",
        label: "User Subscriptions",
        path: "/dashboard/payments/user-subscription",
        icon: CreditCard,
      },
      {
        id: "payments-org-subscription",
        label: "Org Subscriptions",
        path: "/dashboard/payments/org-subscription",
        icon: Building,
      },
      {
        id: "payments-donations",
        label: "Donations",
        path: "/dashboard/payments/donations",
        icon: CircleDollarSign,
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    children: [
      {
        id: "settings-general",
        label: "General",
        path: "/dashboard/settings",
        icon: SlidersHorizontal,
      },
      {
        id: "settings-login",
        label: "Login Details",
        path: "/dashboard/settings/login-details",
        icon: ShieldCheck,
      },
    ],
  },
];
