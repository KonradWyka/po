package com.example.demo

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.*

data class Book(val id: Long, val title: String, val author: String)

@SpringBootApplication
class Application

fun main(args: Array<String>) {
    runApplication<Application>(*args)
}

@RestController
class BookController {

    @GetMapping("/books")
    fun getBooks(): List<Book> {
        val books = listOf(
            Book(1, "Book 1", "Author 1"),
            Book(2, "Book 2", "Author 2"),
            Book(3, "Book 3", "Author 3")
        )
        return books
    }
}

data class AuthRequest(val username: String, val password: String)

@RestController
class AuthController {

    @Autowired
    private lateinit var authService: AuthService

    @PostMapping("/login")
    fun login(@RequestBody request: AuthRequest): ResponseEntity<String> {
        val username = request.username
        val password = request.password

        val isAuthenticated = authService.authenticate(username, password)

        return if (isAuthenticated) {
            ResponseEntity.ok("User $username authenticated successfully")
        } else {
            ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed")
        }
    }
}

@Component
class AuthService {
    fun authenticate(username: String, password: String): Boolean {
        return (username == "admin" && password == "password")
    }
}
