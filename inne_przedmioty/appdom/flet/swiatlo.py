import flet as ft
import requests

def main(page: ft.Page):

    page.window_width = 350       
    page.window_height = 820 #700      
    #page.window_resizable = False  
    page.update()

    page.title = "swiatlo"

#URL
    #urchomikon4 ="http://192.168.6.123/?ch4=on"
    #urchomikoff4 ="http://192.168.6.123/?ch4=off"
    #urchomikon4 ="http://192.168.6.123/?ch4=on"
    chomikurl ="http://192.168.6.123/?ch4="
    schodyurl ="http://192.168.6.123/?ch7="


    def chomikswiatlo(e,address):
        if chomik1.value == True:
            url = address + "on"
            res = requests.get(url)
            print(res)
            print("on")
        elif chomik1.value == False:
            url = address + "off"
            res = requests.get(url)
            print(res)
            print("off")
        else:
            print("nie dziala")
            print(chomik1.value)

    chomik1 = ft.Switch(label="chomik1", value=False, on_change=chomikswiatlo(chomikurl))
    schody = ft.Switch(label="chomik1", value=False, on_change=chomikswiatlo(schodyurl))

    page.add(
        chomik1
    )

ft.app(target=main , view=ft.AppView.WEB_BROWSER)