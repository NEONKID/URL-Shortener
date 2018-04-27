package xyz.neonkid.shortenurl.Model

import org.springframework.data.repository.PagingAndSortingRepository

interface URLRepository: PagingAndSortingRepository<URL, Long>