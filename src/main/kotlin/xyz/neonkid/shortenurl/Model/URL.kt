package xyz.neonkid.shortenurl.Model

import java.io.Serializable
import javax.persistence.*

/**
 * Kotlin 에서 제공하는 Data 클래스를 사용
 *
 * 주의: Data Class 에서 val을 사용할 경우, setter는 만들어지지 않습니다: 바이트 코드 참고, 상수 개념
 *      또한, private을 사용할 경우, getter는 만들어지지 않습니다: 바이트 코드 참고
 */

@Entity
@Table(name = "urls")
data class URL(@Column(length = 1024, nullable = false) val url: String): Serializable {
    @Id @GeneratedValue(strategy = GenerationType.AUTO) val Id: Long? = null
}