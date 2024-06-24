import random

def generate_lorem_ipsum_lines(num_lines):
    lorem_ipsum = (
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    )
    
    words = lorem_ipsum.split()
    lines = []
    
    while len(lines) < num_lines:
        line_length = random.randint(5, 15)
        line = ' '.join(random.choices(words, k=line_length))
        lines.append(line)
    
    return '\n'.join(lines)

if __name__ == "__main__":
    lorem_ipsum_100_lines = generate_lorem_ipsum_lines(100)
    print(lorem_ipsum_100_lines)
