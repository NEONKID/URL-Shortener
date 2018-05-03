package xyz.neonkid.shortenurl.Model

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface URLRepository: CrudRepository<URL, Long>