#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-7-algorytmy-iteracyjne/2-7-03-dec-to-bin/README.md

def funkcja(liczba):
    tab = [0] * 31  
    i = 0 

    while liczba != 0:
        tab[i] = liczba % 2 
        i += 1
        liczba = liczba // 2  

    for j in range(i - 1, -1, -1):
        print(tab[j]) 

liczba = int(input("Podaj liczbe: "))
print(f"{liczba} to: ")
funkcja(liczba)
