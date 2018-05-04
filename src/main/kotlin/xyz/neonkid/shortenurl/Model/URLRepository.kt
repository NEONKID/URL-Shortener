package xyz.neonkid.shortenurl.Model

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Repository

@Repository
interface URLRepository: JpaRepository<URL, Long> {
    @Query(value = "select count(u) from URL u where u.origin = :url")
    fun existByUrl(@Param(value = "url") url: String) : Int

    @Query(value = "select u from URL u where u.origin = :url")
    fun findByUrl(@Param(value = "url") url: String) : URL
}