const UserRouter = require('./UserRouter')
const CategoriesRouter = require('./CategoriesRouter')
const ProductTypesRouter = require('./ProductTypesRouter')
const ProductRouter = require('./ProductRouter')
const DescriptionsRouter = require('./DescriptionsRouter')
const ProductSizesRouter = require('./ProductSizesRouter')
const ProductColerRouter = require('./ProductColerRouter')
const OrderRouter = require('./OrderRouter')
const PaymentRouter = require('./PaymentRouter')

const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/Categories', CategoriesRouter)
    app.use('/api/productTypes', ProductTypesRouter)
    app.use('/api/product', ProductRouter)
    app.use('/api/description', DescriptionsRouter)
    app.use('/api/productSizes', ProductSizesRouter)
    app.use('/api/productColer', ProductColerRouter)
    app.use('/api/order', OrderRouter)
    app.use('/api/payment', PaymentRouter)
}

module.exports = routes