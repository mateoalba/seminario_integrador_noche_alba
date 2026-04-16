print("Match - case")
comando = input("Comando iniciar/parar/reiniciar: ")

match comando:
    case "iniciar":
        print("Sistema iniciando....")
    case "parar":
        print("Sistema deteniendo....")
    case "reiniciar":
        print("Sistema reiniciando....")
    case _:
        print(f"Comando {comando} no reconocido")






print("Match - con condiciones")
numero = int(input("Incluye numero: "))

match numero:
    case n if  n<0:
        print(f"{n} es negativo")
    case 0:
        print("Es cero")
    case n if n %2 == 0:
        print(f"El numero {n} es positivo ypar")
    case n:
        print(f"El numero {n} es positivo e impar")

