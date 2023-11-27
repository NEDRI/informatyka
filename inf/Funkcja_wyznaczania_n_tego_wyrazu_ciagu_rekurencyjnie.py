#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-8-algorytmy-rekurencyjne/2-8-01-ciagi/README.md

def funkcja(n):
    if n == 1:
        return 1
    if n == 2:
        return 0.5
    return -funkcja(n-1) * funkcja(n-2)

n = int(input("Podaj numer wyrau ciagu: "))
wartosc=funkcja(n)
print(f"{n} wyraz ciagu ma wartosc {wartosc}")