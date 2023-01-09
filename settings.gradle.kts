pluginManagement {
    repositories {
        google()
        gradlePluginPortal()
        mavenCentral()
    }
    val KOTLIN_VERSION: String by settings
    plugins {
        kotlin("multiplatform") version KOTLIN_VERSION
    }
}