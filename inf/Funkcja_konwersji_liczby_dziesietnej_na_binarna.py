#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-7-algorytmy-iteracyjne/2-7-03-dec-to-bin/README.md
def przliczanie(a):
    tab = []
    while a != 0:
        tab.append(a % 2)
        a = a // 2
    return tab
liczba = int(input("Podaj liczbe: "))
wynik = przliczanie(liczba)
print(f"Liczba {liczba}  po zamianie: {wynik}")
