def suma_rekurencja(liczba):
    if liczba == 0: return 0
    return liczba + suma_rekurencja(liczba - 1)

l = 4
print(suma_rekurencja(l))