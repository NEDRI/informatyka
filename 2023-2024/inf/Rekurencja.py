#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/1-programowanie-strukturalne/1-3-struktury-danych/1-3-7-rekurencja/README.md

def funkcja(n):
    if n == 0:
        return 1
    else:
        return n * funkcja(n - 1)

n = int(input("podaj liczbe: "))
wynik = funkcja(n)
print(f"{n}! = {wynik}")
