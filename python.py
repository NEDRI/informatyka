import tkinter as tk

# Initialize player scores and round count
player_scores = [0, 0, 0]
round_count = 1

# List to store score labels for each player
score_labels = []

# Function to update display of scores and round count
def update_display():
    score_labels[0].config(text=f"Player 1: {player_scores[0]}")
    score_labels[1].config(text=f"Player 2: {player_scores[1]}")
    score_labels[2].config(text=f"Player 3: {player_scores[2]}")
    round_label.config(text=f"Round: {round_count}")

# Function to handle player answer and update score
def on_player_click(player_id):
    global round_count
    answer = answer_entries[player_id].get()  # Get the answer input from the corresponding player
    if answer.lower() == "correct":  # Replace 'correct' with your condition for checking answers
        player_scores[player_id] += 10  # Increase score if answer is correct
    round_count += 1  # Increase the round count
    update_display()  # Update the display with new scores and round count
    answer_entries[player_id].delete(0, tk.END)  # Clear the answer input after submission

# Set up the main Tkinter window
root = tk.Tk()
root.title("Round Counter and Player Points")
root.geometry("600x500")

# Display labels for player scores
for i in range(3):
    label = tk.Label(root, text=f"Player {i+1}: {player_scores[i]}", font=("Arial", 20))
    label.pack(pady=10)
    score_labels.append(label)

# Display label for round number
round_label = tk.Label(root, text=f"Round: {round_count}", font=("Arial", 20))
round_label.pack(pady=20)

# List to store answer entry fields for each player
answer_entries = []
for i in range(3):
    entry = tk.Entry(root, font=("Arial", 20))
    entry.pack(pady=5)
    answer_entries.append(entry)

# Create buttons for each player to submit their answer
button_colors = ["red", "lime", "aqua"]
player_buttons = []
for i in range(3):
    button = tk.Button(root, text=f"Player {i+1} Submit Answer", width=20, height=2, bg=button_colors[i],
                       command=lambda i=i: on_player_click(i))
    button.pack(pady=5)
    player_buttons.append(button)

# Start the Tkinter event loop
root.mainloop()
