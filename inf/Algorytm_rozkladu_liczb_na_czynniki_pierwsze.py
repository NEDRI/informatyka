#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-7-algorytmy-iteracyjne/2-7-01-rozklad-liczb/README.md
def funkcja(n):
    k = 2
    tab = []
    while n > 1:
        while n % k == 0:
            tab.append(k)
            n = n // k
        k = k + 1
    return tab
inp = int(input("Podaj liczbe: "))
tab = funkcja(inp)
print(f"Czynniki pierwsze liczby {inp}: {tab}")
