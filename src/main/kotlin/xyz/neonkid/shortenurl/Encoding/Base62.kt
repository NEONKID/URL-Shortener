package xyz.neonkid.shortenurl.Encoding

object Base62 {
    internal val BASE62 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".toCharArray()

    fun encode(_value: Int): String {
        var value = _value
        val builder = StringBuilder()
        do {
            val i = value % 62
            builder.append(BASE62[i])
            value /= 62
        } while (value > 0)
        return builder.toString()
    }

    fun encodeToLong(_value: Long): String {
        var value = _value
        val builder = StringBuilder()
        do {
            val i = (value % 62).toInt()
            builder.append(BASE62[i])
            value /= 62
        } while (value > 0)
        return builder.toString()
    }

    fun decode(value: String): Int {
        var result = 0
        var power = 1
        for (i in 0 until value.length) {
            val digit = String(BASE62).indexOf(value[i])
            result += digit * power
            power *= 62
        }
        return result
    }

    fun decodeToLong(value: String): Long {
        var result: Long = 0
        var power: Long = 1
        for (i in 0 until value.length) {
            val digit = String(BASE62).indexOf(value[i])
            result += digit * power
            power *= 62
        }
        return result
    }
}
