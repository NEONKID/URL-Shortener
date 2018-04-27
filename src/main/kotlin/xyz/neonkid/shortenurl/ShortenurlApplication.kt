package xyz.neonkid.shortenurl

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ShortenurlApplication

fun main(args: Array<String>) {
    runApplication<ShortenurlApplication>(*args)
}
