tab = [0] * 31
i = 0

liczba = int(input("Podaj liczbę dziesiętną: "))
while liczba != 0:
    tab[i] = liczba % 2
    liczba = liczba // 2
    i += 1

for j in range(i - 1, -1, -1):
    print(tab[j], end="")
