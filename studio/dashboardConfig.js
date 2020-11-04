export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa1ff1ed9358014822fc145',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wxvg9ubo',
                  apiId: '2eec6cac-a900-47fe-b967-0007844cc5f2'
                },
                {
                  buildHookId: '5fa1ff1e6f5921190fa6191f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mzffvcop',
                  apiId: 'd7a7d8be-8f74-4380-9bf7-3c20656ec119'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/odelavia/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mzffvcop.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
