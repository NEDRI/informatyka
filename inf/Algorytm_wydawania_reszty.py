#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-9-inne-algorytmy/2-9-02-wydawanie-reszty/README.mdhttps://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-9-inne-algorytmy/2-9-02-wydawanie-reszty/README.md
def wydaj_reszte(kwota):
    nominaly = [500, 200, 100, 50, 20, 10, 5, 2, 1]
    wynik = []
    i = 0
    while kwota > 0 and i < len(nominaly):
        if kwota >= nominaly[i]:
            ile = kwota // nominaly[i]
            kwota -= nominaly[i] * ile
            wynik.append((nominaly[i], ile))
        i += 1
    return wynik

kwota = int(input("Podaj reszte do wyplacenia: "))
reszta = wydaj_reszte(kwota)
for nominal, ile in reszta:
    print(f"{nominal} x {ile}")
