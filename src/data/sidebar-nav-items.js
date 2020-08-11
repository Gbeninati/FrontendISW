export default function() {
  return [
    // {
    //   title: "Blog Posts",
    //   htmlBefore: '<i class="material-icons">vertical_split</i>',
    //   to: "/blog-posts",
    // },
    // {
    //   title: "Add New Post",
    //   htmlBefore: '<i class="material-icons">note_add</i>',
    //   to: "/add-new-post",
    // },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    // },
    // {
    //   title: "Tables",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/tables",
    // },
    // {
    //   title: "User Profile",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: "/user-profile-lite",
    // },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // },
    {
      title: 'Pabellones Disponibles',
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: '/pabellondisp-list'
    },
    {
      title: 'Pabellones Ocupados',
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: '/pabellonocp-list'
    },
    {
      title: 'Personal Asignado a Pabellones',
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: '/personalasg-list'
    },
    /*
    {
      title: 'Agregar Paciente',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: '/paciente-form'
    },
    {
      title: 'Agregar Personal',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: '/personal-form'
    }, */
    {
      title: 'Agregar Pabellon',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: '/pabellon-form'
    },
    {
      title: 'Asignar Pabellon',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: '/asignar-form'
    },
    {
      title: 'Liberar Pabellon',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: '/liberar-form'
    }
  ];
}
