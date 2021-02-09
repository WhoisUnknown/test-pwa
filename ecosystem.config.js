module.exports = {
  apps: [
    {
      name: 'nuxt pwa app',
      exec_mode: 'fork',
      instances: '1', // Or a number of instances
      script: 'npm',
      args: 'start',
    },
  ],
};
