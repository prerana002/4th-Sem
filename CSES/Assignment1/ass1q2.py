# Ask the user for their Name, Age, Height(float) and Country.
# Print the entered information in this format:
# Hello SIMRAN CHAPAGAIN
# You are 33 years old.
# Your height is 5.50 feet.
# You are from Nepal.
# Your nickname is SIIN
# Nickname is the combination of first two letters and last two letters of the name.
# The Name and Nickname must be in Uppercase.
# The Country must be capital.
# The height should be rounded to two decimal points.
name=input("Enter your name: ")
age=int(input("Enter your age: "))
height=float(input("Enter your height: "))
country=input("Enter your country: ")
name1=name.upper()
country1=country.title()
print(f"hello {name1}")
print(f"you are {age} years old.")
print(f"your height is {height:.2f} feet.")
print(f"you are from {country1}.")
print(f"your nickname is  {name[:2]+name[-2:]}.")