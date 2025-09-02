def make_card():
    name = input("Enter your name: ")
    age = int(input("Enter your age: "))
    message = "Have a great day!"
    return (name, age, message)
name,age,message    = make_card()
print()
print(f"Hello {name}({age} years old)!\n{message}")