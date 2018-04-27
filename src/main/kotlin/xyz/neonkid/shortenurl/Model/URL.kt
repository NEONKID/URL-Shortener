package xyz.neonkid.shortenurl.Model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class URL(val url: String) {
    @Id @GeneratedValue val Id: Long? = null
}