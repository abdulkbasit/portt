export default {
    name: 'project',
    type: 'document',
      title: 'project',
    fields: [ {
        title: 'Manuscript',
        name: 'manuscript',
        type: 'file',
        fields: [
          {
            name: 'description',
            type: 'string',
            title: 'Description'
          },
         
        ]
      },
      {
        name: 'title',
        type: 'string',
        title: 'title'
      },
      {
        name: 'cat',
        type: 'string',
        title: 'cat'
      } 
       
       
     
    ],
  }