package xyz.neonkid.shortenurl.Controller

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.*
import xyz.neonkid.shortenurl.Model.ResourceNotFoundException
import xyz.neonkid.shortenurl.Model.URL
import xyz.neonkid.shortenurl.Model.URLRepository
import javax.validation.Valid

@RestController // RestController는 Controller에서 ResponseBody를 추가한 것이다.
@RequestMapping("/url")
class URLController {
    // URL을 저장할 저장소..
    // save, count 등의 메소드로 DBMS에 읽고 쓸 수 있음
    @Autowired
    lateinit var urlDAO: URLRepository

    // URL 모델을 DB에 추가합니다.
    @PostMapping("/add")
    fun postAdd(@Valid @RequestBody url: URL) {
        // URL 저장 후, 결과를 클라이언트에게 반환
        urlDAO.save(url)
    }

    // URL 코드를 DBMS에서 가져옵니다.
    @PostMapping("/get/{id}")
    operator fun get(@PathVariable(value = "id") urlID: Long): URL = urlDAO.findById(urlID).orElseThrow { ResourceNotFoundException("URL", "id", urlID) }

    // DBMS에 있는 URL 코드를 제거합니다.
    @DeleteMapping("/del/{id}")
    fun delete(@PathVariable(value = "id") urlID: Long): ResponseEntity<Any> {
        val url: URL = urlDAO.findById(urlID).orElseThrow { ResourceNotFoundException("URL", "id", urlID) }
        urlDAO.delete(url)
        return ResponseEntity.ok().build()
    }
}