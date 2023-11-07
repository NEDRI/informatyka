import requests
from time import *


urchomikon ="http://192.168.6.123/?ch4=on"
urchomikoff ="http://192.168.6.123/?ch4=off"


res = requests.get(urchomikon)
sleep(1)
res = requests.get(urchomikoff)
sleep(1)
res = requests.get(urchomikon)
sleep(1)
res = requests.get(urchomikoff)
sleep(1)
res = requests.get(urchomikon)
sleep(1)
res = requests.get(urchomikoff)
sleep(1)  
res = requests.get(urchomikon)
sleep(1)
res = requests.get(urchomikoff)
sleep(1)
res = requests.get(urchomikon)
sleep(1)
res = requests.get(urchomikoff)
sleep(1)
res = requests.get(urchomikon)
