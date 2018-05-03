package xyz.neonkid.shortenurl.Controller

import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import xyz.neonkid.shortenurl.Model.ApiResponseMessage
import xyz.neonkid.shortenurl.Model.URL
import xyz.neonkid.shortenurl.Service.URLService
import javax.validation.Valid

@RestController
@RequestMapping("/url")
@Api(value = "URLController", description = "URL 변환 관련 API", basePath = "/url")
class URLController {
    @Autowired lateinit var urlDAO: URLService

    @PostMapping("/add")
    @ApiOperation(value = "URL 추가", notes = "DBMS에 URL을 추가하고 변환된 URL을 반환해줍니다.")
    fun addURL(@Valid @RequestBody url: URL): ResponseEntity<ApiResponseMessage> {
        lateinit var message: ApiResponseMessage
        lateinit var response: ResponseEntity<ApiResponseMessage>
        try {
            // URL 을 추가하는데,
            // 여기에 기존에 존재하는 URL 정보가 있으면 해당 정보를 반환해주는 코드가 필요.
            val result = urlDAO.addURL(url)

            // URL ID는 result.Id를 통해서 얻을 수 있다.
            // 해당 값에서 Base62 인코딩 라이브러리를 사용해 값을 던지고, 그 반환을
            // 현재 서버의 주소와 함께 던져준다.

            message = ApiResponseMessage("Success", "URL 등록 성공", "", "", result.url)
            response = ResponseEntity(message, HttpStatus.OK)
        } catch (ex: Exception) {
            message = ApiResponseMessage("Failed", "URL 등록 실패", "ERROR00001", "Fail to registration for URL", "")
            response = ResponseEntity(message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return response
    }

    @GetMapping("/get/{id}")
    @ApiOperation(value = "실제 URL 조회", notes = "ID 값을 이용하여 실제 URL 주소를 가져옵니다.")
    fun getURL(@PathVariable(value = "id") urlID: Long): URL = urlDAO.selectURL(urlID)

    @DeleteMapping("/del/{id}")
    @ApiOperation(value = "URL 제거", notes = "DBMS에서 URL을 제거합니다, URL을 제거하면 기존에 만들어진 URL은 더 이상 사용이 불가능합니다.")
    fun deleteURL(@PathVariable(value = "id") urlID: Long) = urlDAO.deleteURL(urlID)
}