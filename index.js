const map = {
  dev: 'dev',
  development: 'dev',
  test: 'test',
  testing: 'test',
  stage: 'stage',
  staging: 'stage',
  prod: 'prod',
  production: 'prod',
}

const nodeEnv = String(map[process.env['NODE_ENV']] || 'unknown')
const isDev   = nodeEnv === "dev"   || nodeEnv === "development"
const isTest  = nodeEnv === "test"  || nodeEnv === "testing"
const isStage = nodeEnv === "stage" || nodeEnv === "staging"
const isProd  = nodeEnv === "prod"  || nodeEnv === "production"

const isUnknown = !isDev && !isTest && !isStage && !isProd

module.exports = {
  nodeEnv,
  isDev,
  isTest,
  isStage,
  isProd,
  isUnknown,
}
