import Fluent
import Vapor

struct ProductController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let products = routes.grouped("products")
        products.get(use: index)
        products.post(use: create)
        products.group(":productID") { product in
            product.delete(use: delete)
            product.put(use: update)
            product.get(use: show)
        }
    }

    func create(req: Request) throws -> EventLoopFuture<Product> {
        let product = try req.content.decode(Product.self)
        return product.save(on: req.db).map { product }
    }

    func delete(req: Request) throws -> EventLoopFuture<HTTPStatus> {
        return Product.find(req.parameters.get("productID"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap { $0.delete(on: req.db) }
            .transform(to: .ok)
    }

    func update(req: Request) throws -> EventLoopFuture<Product> {
        let updatedProduct = try req.content.decode(Product.self)
        return Product.find(req.parameters.get("productID"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap { existingProduct in
                existingProduct.name = updatedProduct.name
                existingProduct.description = updatedProduct.description
                existingProduct.price = updatedProduct.price
                return existingProduct.save(on: req.db).map { existingProduct }
            }
    }

    func show(req: Request) throws -> EventLoopFuture<Product> {
        return Product.find(req.parameters.get("productID"), on: req.db)
            .unwrap(or: Abort(.notFound))
    }

    func index(req: Request) throws -> EventLoopFuture<View> {
        return try renderIndex(req: req)
    }

    func renderIndex(req: Request) throws -> EventLoopFuture<View> {
    return Product.query(on: req.db).all().flatMap { products in
        guard !products.isEmpty else {
            // If the list of products is empty, display an error message
            let errorView = """
                <h1>No products found</h1>
                <p>There are no products available at the moment.</p>
                """
            return req.view.render(errorView)
        }
        let context = ["products": products]
        return req.view.render("index", context)
    }
}



}
