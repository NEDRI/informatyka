import flet as ft

def main(page: ft.Page):
    
#Ustawienia ekranu
    page.window_width = 350       
    page.window_height = 820 #700      
    #page.window_resizable = False  
    page.update()

#Naglowek
    page.title = "appdom"
    
    #page.vertical_alignment = ft.MainAxisAlignment.CENTER

#Aplikacja

    def swiatlo_menu():
        print("1")
        page.update()

    page.add(
        
        ft.Row(
            [
                ft.FloatingActionButton("swiatlo", on_click=swiatlo_menu),
                ft.FloatingActionButton("rolety", on_click=print("2")),
            ],
        ),
        ft.Row(
            [
                ft.FloatingActionButton("brama", on_click=print("3")),
                ft.FloatingActionButton("kamery", on_click=print("4")),
            ],
        ),
        ft.Row(
            [
                ft.FloatingActionButton("pompa", on_click=print("5")),
                ft.FloatingActionButton("ogrzewanie", on_click=print("6")),
            ],
        ),
    )
ft.app(target=main)