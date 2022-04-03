FROM openjdk:11
COPY target/demo2-*.jar app.jar
ENTRYPOINT ["java", "-agentlib:jdwp=transport=dt_socket,address=5005,server=y,suspend=n", "-jar", "/app.jar"]
