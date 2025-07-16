plugins {
    id("java")
}

group = "sh.ledgehanger"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(platform("org.junit:junit-bom:5.10.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    implementation("com.microsoft.playwright:playwright:1.53.0")
}

tasks.test {
    useJUnitPlatform()
}