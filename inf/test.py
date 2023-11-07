#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-7-algorytmy-iteracyjne/2-7-03-dec-to-bin/README.md

def funkcja(n):
 tab  = [15]
 i = 0

 while n != 0:
    tab[i] = n % 2
    i=i+1
    n=n/2

    

n = int(input("podja liczbe dziesietna: "))
funkcja(n)