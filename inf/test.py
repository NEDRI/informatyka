def przliczanie(a):
    tab = [0]
    while a != 0:
        tab.append(a % 2)
        a = a // 2
    return tab
liczba = int(input("Podaj liczbe dziesietna: "))
wynik = przliczanie(liczba)
print(f"Liczba {liczba}  po zamianie na postac binarna: {wynik}")
