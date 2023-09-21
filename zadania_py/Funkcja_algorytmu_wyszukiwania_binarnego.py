tab = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
szukana = input("szukana")

l = 0
p = 15
sr = l+p/2
sr int(sr)

while l <= p:
    if tab[sr] == szukana:
        print(sr)
    if tab[sr] > szukana:
        p = sr - 1
    else:
        p = sr + 1
    sr = (l+p)/2
print(l,p,sr)
#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-3-algorytmy-wyszukiwania/2-3-02-wyszukiwanie-binarne/README.md