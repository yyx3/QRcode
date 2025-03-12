import os

directory = "./shuzi"

for filename in os.listdir(directory):
    file_path = os.path.join(directory, filename)
    
    try:
        with open(file_path, "r") as file:
            lines = file.readlines()
            last_number = int(lines[-1].strip()) if lines else 0
    except FileNotFoundError:
        last_number = 0

    new_number = last_number + 1

    with open(file_path, "a") as file:
        file.write(f"{new_number}\n")

    print(f"已向 {filename} 写入数字: {new_number}")
