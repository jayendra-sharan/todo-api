module.exports = {
  mockTodo: [
    {
      id: '12345',
      title: 'Create todo API',
      description: 'Use express and local db',
      priority: 'High',
      category: 'Learning',
      tags: 'Learning, express, nodejs',
      dueDate: new Date(),
      status: 'Todo'
    },
    {
      id: '123456',
      title: 'Deploy todo API',
      description: 'Deploy on Netlify',
      priority: 'Highest',
      category: 'Learning',
      tags: 'netlify, deployment',
      dueDate: new Date(),
      status: 'Todo'
    },
    {
      id: '123457',
      title: 'Test in Browser',
      description: 'Test get calls',
      priority: 'Highest',
      category: 'Learning',
      tags: 'netlify, deployment',
      dueDate: new Date(),
      status: 'Done'
    },
  ]
}
