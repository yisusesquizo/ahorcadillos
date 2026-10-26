package JC;
import java.util.Scanner;
import java.util.Random;
public class AHORCAD {

	public static void main(String[] args) {
		  Scanner entrada = new Scanner(System.in);
	        Random random = new Random();

	        String[] palabras = {
	            "ANIVERSARIO", "TEC", "BUFALO",
	            "COMIDA", "CELEBRACION", "ESCUELA", "INGENIERIA"
	        };

	        String palabra = palabras[random.nextInt(palabras.length)];
	        char[] progreso = new char[palabra.length()];

	        for (int i = 0; i < progreso.length; i++) {
	            progreso[i] = '_';
	        }

	        int errores = 0;
	        int maxErrores = 6;
	        boolean ganaste = false;

	        System.out.println("=== JUEGO DEL AHORCADO ===");

	        while (errores < maxErrores && !ganaste) {

	            System.out.print("\nPalabra: ");
	            for (char letra : progreso) {
	                System.out.print(letra + " ");
	            }

	            System.out.println("\nErrores: " + errores + "/" + maxErrores);
	            System.out.print("Ingresa una letra: ");

	            String texto = entrada.nextLine().trim().toUpperCase();

	            if (texto.length() != 1 ||
	                texto.charAt(0) < 'A' || texto.charAt(0) > 'Z') {
	                System.out.println("Ingresa una sola letra valOida.");
	                continue;
	            }

	            char letra = texto.charAt(0);
	            boolean encontrada = false;

	            for (int i = 0; i < palabra.length(); i++) {
	                if (palabra.charAt(i) == letra) {
	                    progreso[i] = letra;
	                    encontrada = true;
	                }
	            }

	            if (encontrada) {
	                System.out.println("¡Correcto!");
	            } else {
	                errores++;
	                System.out.println("Letra incorrecta.");
	            }

	            ganaste = true;

	            for (char c : progreso) {
	                if (c == '_') {
	                    ganaste = false;
	                    break;
	                }
	            }
	        }

	        if (ganaste) {
	            System.out.println("\n¡GANASTE! La palabra era: " + palabra);
	        } else {
	            System.out.println("\n¡PERDISTE! La palabra era: " + palabra);
	        }

	        entrada.close();
	    }
	


	}


