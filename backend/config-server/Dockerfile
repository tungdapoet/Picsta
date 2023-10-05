FROM maven:4.0.0-openjdk-17-slim AS build
WORKDIR /usr/src/app
COPY pom.xml ./
RUN mvn dependency:go-offline
COPY src/ ./src/
RUN mvn clean package

FROM openjdk:17-slim
COPY --from=build /usr/src/app/target/config-server.jar /usr/app/config-server.jar
CMD ["java", "-jar", "/usr/app/config-server.jar"]
