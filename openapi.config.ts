const { generateService } = require('@umijs/openapi')

generateService({
  requestLibPath: "import request from '../request'",
  schemaPath: 'C:\\Users\\26695\\Desktop\\前端万用模板\\WuziWebTemplate-Frontend\\src\\openapi3_0.json',
  serversPath: './src',
})