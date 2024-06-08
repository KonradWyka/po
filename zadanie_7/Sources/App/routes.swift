import Vapor

func routes(_ app: Application) throws {
    app.get { req -> EventLoopFuture<View> in
        // Renderuj widok index.leaf i przekaż listę produktów jako kontekst
        return renderIndex(req: req)
    }

    try app.register(collection: ProductController())
}

func renderIndex(req: Request) -> EventLoopFuture<View> {
    return Product.query(on: req.db).all().flatMap { products in
        let context = ["products": products]
        return req.view.render("index", context)
    }
}
