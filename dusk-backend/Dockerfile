
# Stage 1: Build
FROM eclipse-temurin:21-jdk AS build
WORKDIR /app

# Step A: Copy only the dependency files first
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Step B: Download dependencies (this layer is cached)
# Added -U (force update) and -Dmaven.wagon.http.pool=false (network fix)
RUN chmod +x mvnw && ./mvnw dependency:go-offline -B -Dmaven.wagon.http.pool=false

# Step C: Copy source and build
COPY src ./src
RUN ./mvnw clean package -DskipTests -B -Dmaven.wagon.http.pool=false

# Stage 2: Run
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar 
ENTRYPOINT ["java", "-jar", "app.jar"]

