package br.com.anagrama.anagramaapp;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

// Classe utilitária responsável por gerar todas as permutações (anagramas) possíveis de uma string
public class GeradorAnagramas {

    public static List<String> gerarAnagramas(String entrada) {
        Set<String> resultado = new HashSet<>();
        permutar("", entrada, resultado);
        return new ArrayList<>(resultado); // Converte o Set para List (evita repetições)
    }

    // Método recursivo que gera todas as combinações de letras
    private static void permutar(String prefixo, String restante, Set<String> resultado) {
        int n = restante.length();
        if (n == 0) {
            resultado.add(prefixo);
        } else {
            for (int i = 0; i < n; i++) {
                permutar(
                    prefixo + restante.charAt(i),
                    restante.substring(0, i) + restante.substring(i + 1),
                    resultado
                );
            }
        }
    }
}
