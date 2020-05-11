module.exports = {
  apps: [{
    name: 'kapsalon.michalantczak.com',
    script: 'npm',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'run start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      DATABASE_HOST: 'localhost',
      DATABASE_USER: 'mantczak',
      DATABASE_SECRET: 'psychedryna66',
      DATABASE_NAME: 'kapsalon',
      DATABASE_PORT: 5432
    }
  }],

  deploy: {
    production: {
      user: 'node',
      host: '134.209.137.25',
      ref: 'origin/master',
      repo: 'https://github.com/Vastlaan/kapsalon.michalantczak.com.git',
      path: '/var/www/kapsalon.michalantczak.com',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
