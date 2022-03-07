import express from 'express'
import { isRegularExpressionLiteral } from 'typescript'

const routes = express()

routes.use('/shelters', sheltersRoutes)