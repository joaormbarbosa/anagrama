package br.com.anagrama.anagramaapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Classe principal responsável por iniciar a aplicação Spring Boot
@SpringBootApplication
public class AnagramaappApplication {

    public static void main(String[] args) {
        // Inicializa o contexto Spring e sobe o servidor embutido (Tomcat)
        SpringApplication.run(AnagramaappApplication.class, args);
    }
}
