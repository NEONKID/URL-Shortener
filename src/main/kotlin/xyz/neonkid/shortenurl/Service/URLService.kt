package xyz.neonkid.shortenurl.Service

import org.springframework.http.ResponseEntity
import xyz.neonkid.shortenurl.Model.URL

interface URLService {
    fun selectURL(uid: Long): URL
    fun addURL(url: URL): URL
    fun deleteURL(uid: Long): ResponseEntity<Any>
}