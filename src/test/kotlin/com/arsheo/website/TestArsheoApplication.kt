package com.arsheo.website

import org.springframework.boot.fromApplication

fun main(args: Array<String>) {
    fromApplication<ArsheoApplication>().with(TestcontainersConfiguration::class.java).run(*args)
}
