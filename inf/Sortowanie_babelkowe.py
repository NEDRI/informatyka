#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-4-algorytmy-sortowania/2-4-03-sortowanie-babelkowe/README.md
import random

def generownie_tablicy(n):
    tab = [random.randint(0,100) for i in range(n)]
    return tab

def sortowanie(tab):
    n = len(tab)
    for i in range(n):
        for j in range(1, n - i):
            if tab[j - 1] < tab[j]:
                temp = tab[j - 1]
                tab[j - 1] = tab[j]
                tab[j] = temp
    return tab

rozmiar_tab = int(input("Podaj dlugosc tablicy: "))
tab = generownie_tablicy(rozmiar_tab)
print("Wygenerowana tablica:", tab)

tab = sortowanie(tab)
print("Po sortowaniu",tab)
