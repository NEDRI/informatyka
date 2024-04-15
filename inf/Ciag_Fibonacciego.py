#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-8-algorytmy-rekurencyjne/2-8-02-ciag-fibonacciego/README.md
def zad1():
    def zad1(n, tab={}):
        if n < 3:
            return 1
        if n in tab:
            return tab[n]
        else:
            tab[n] = zad1(n - 2, tab) + zad1(n - 1, tab)
            return tab[n]
    #n = int(input("Podaj nr wyrazu ciagu: "))
    n = 50
    print(f"Wartość {n}-tego wyrazu ciągu Fibonacciego wynosi: {zad1(n)}\n")
def zad2():
    def zad2(n):
        print("kaczka")
    
zad1()
zad2()