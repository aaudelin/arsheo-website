package com.arsheo.website

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller

@SpringBootApplication
class ArsheoApplication

fun main(args: Array<String>) {
    runApplication<ArsheoApplication>(*args)
}

@Controller
class HealthController {
    @QueryMapping
    fun healthCheck(): String = "OK"
}
