package xyz.neonkid.shortenurl.Model

import java.io.Serializable
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.Table

/**
 * Kotlin 에서 제공하는 Data 클래스를 사용
 */

@Entity
@Table(name = "urls")
data class URL(val url: String): Serializable {
    // 주소를 식별할 ID
    @Id @GeneratedValue val Id: Long? = null
}