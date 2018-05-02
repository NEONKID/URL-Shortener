package xyz.neonkid.shortenurl.Model

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface URLRepository: JpaRepository<URL, Long>