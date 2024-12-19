import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Структура института",
    url: "#",
  },
  {
    title: "Информация об университета",
    url: "#",
  },
  {
    title: "Внутрення система оценки качества образования",
    url: "#",
  },
  {
    title: "История университета",
    url: "#",
  },
  {
    title: "Доска почета",
    url: "#",
  },
  {
    title: "Электронная информационно-образовательная среда",
    url: "#",
  },
  {
    title: "Лучшие спортсмены",
    url: "#",
  },
  {
    title: "Наука",
    url: "#",
  },
  {
    title: "Воспитательная работа",
    url: "#",
  },
  {
    title: "Обращение граждан",
    url: "#",
  },
  {
    title: "Противодействие терроризму и экстремизму",
    url: "#",
  },
  {
    title: "Часто задаваемые вопросы",
    url: "#",
  },
  {
    title: "Фотоотчеты",
    url: "#",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {/* <item.icon /> */}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
