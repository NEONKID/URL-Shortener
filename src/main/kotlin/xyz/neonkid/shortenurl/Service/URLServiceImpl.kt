package xyz.neonkid.shortenurl.Service

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Isolation
import org.springframework.transaction.annotation.Propagation
import org.springframework.transaction.annotation.Transactional
import xyz.neonkid.shortenurl.Model.ResourceNotFoundException
import xyz.neonkid.shortenurl.Model.URL
import xyz.neonkid.shortenurl.Model.URLRepository

@Service
class URLServiceImpl : URLService {
    @Autowired lateinit var urlRepository: URLRepository

    @Transactional(readOnly = true, isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED)
    override fun selectURL(uid: Long): URL = urlRepository.findById(uid).orElseThrow { ResourceNotFoundException("URL", "id", uid) }

    @Transactional(readOnly = false, isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED)
    override fun addURL(url: URL): URL = if(urlRepository.existByUrl(url.origin) == 0) urlRepository.save(url) else urlRepository.findByUrl(url.origin)

    @Transactional(readOnly = false, isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED)
    override fun deleteURL(uid: Long): ResponseEntity<Any> {
        val url: URL = urlRepository.findById(uid).orElseThrow { ResourceNotFoundException("URL", "id", uid) }
        urlRepository.delete(url)
        return ResponseEntity.ok().build()
    }
}