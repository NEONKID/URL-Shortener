package xyz.neonkid.shortenurl.Controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import xyz.neonkid.shortenurl.Model.URL
import xyz.neonkid.shortenurl.Model.URLRepository

@RestController
@RequestMapping("/url")
class URLController {
    @Autowired
    lateinit var urlDAO: URLRepository

    @RequestMapping(value = ["/add"], method = [RequestMethod.GET])
    fun add(): String = "url/add"

    @RequestMapping(value = ["/add"], method = [RequestMethod.POST])
    fun postAdd(url: URL) {
        urlDAO.save(url)
    }

    @RequestMapping(value = ["/get"], method = [RequestMethod.POST])
    fun get(model: Model) {

    }
}