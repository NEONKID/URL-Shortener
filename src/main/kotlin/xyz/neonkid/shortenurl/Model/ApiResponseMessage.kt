package xyz.neonkid.shortenurl.Model

data class ApiResponseMessage(val status: String, val message: String, val errMessage: String, val errCode: String, val result: String)