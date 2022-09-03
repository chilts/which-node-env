const nodeEnv = process.env.NODE_ENV
const isDev   = nodeEnv === "dev"   || nodeEnv === "development"
const isTest  = nodeEnv === "test"  || nodeEnv === "testing"
const isStage = nodeEnv === "stage" || nodeEnv === "staging"
const isProd  = nodeEnv === "prod"  || nodeEnv === "production"

let isUnknown = false
isUnknown = !isDev && !isTest && !isStage && !isProd

module.exports = {
  nodeEnv,
  isDev,
  isTest,
  isStage,
  isProd,
  isUnknown,
}
