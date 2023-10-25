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
