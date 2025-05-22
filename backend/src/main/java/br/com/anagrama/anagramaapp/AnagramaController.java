package br.com.anagrama.anagramaapp; // mesmo pacote!

import org.springframework.web.bind.annotation.*;

import java.util.List;

// Define um controlador REST acessível na URL base "/api"
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Permite chamadas de qualquer origem (ex: Angular rodando em outra porta)
public class AnagramaController {

    // Endpoint GET que recebe uma query param 'letras' e retorna a lista de anagramas
    @GetMapping("/anagramas")
    public List<String> gerarAnagramas(@RequestParam String letras) {
        return GeradorAnagramas.gerarAnagramas(letras);
    }
}
