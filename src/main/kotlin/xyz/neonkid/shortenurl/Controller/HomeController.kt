package xyz.neonkid.shortenurl.Controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod

@Controller
class HomeController {
    @GetMapping("/")
    fun Index(): String = "index"

    // URL을 Redirect 하는 메소드
    @GetMapping("/{id}")
    fun Redirect(): String = "redirect"
}