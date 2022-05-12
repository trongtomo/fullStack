export const adminMenu = [
  {
    //Quản lý người dùng
    name: "menu.admin.manage-user",
    menus: [
      {
        name: "menu.admin.crud",
        link: "/system/user-admin",
      },
      {
        name: "menu.admin.crud-redux",
        link: "/system/user-redux",
      },
      {
        name: "menu.admin.manage-doctor",
        link: "/system/user-doctor",
      },
      {
        name: "menu.admin.manage-admin",
        link: "/system/user-admin",
      },
      //   subMenus: [
      //     {
      //       name: "menu.system.system-administrator.user-manage",
      //       link: "/system/user-manage",
      //     },
      //     {
      //       name: "menu.system.system-administrator.user-redux",
      //       link: "/system/user-redux",
      //     },
      //   ],
      // },
      // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    ],
  },
  {
    //Quản lý phong kham
    name: "menu.admin.clinic",
    menus: [
      {
        name: "menu.admin.manage-clinic",
        link: "/system/manage-clinic",
      },
    ],
  },
  {
    //Quản lý chuyen khoa
    name: "menu.admin.specialty",
    menus: [
      {
        name: "menu.admin.manage-specialty",
        link: "/system/manage-specialty",
      },
    ],
  },
  {
    //Quản lý hand book
    name: "menu.admin.handbook",
    menus: [
      {
        name: "menu.admin.manage-handbook",
        link: "/system/manage-handbook",
      },
    ],
  },
];
