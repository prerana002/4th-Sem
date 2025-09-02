number = int(input("Enter a number: "))

if number > 0 and number % 2 == 0:
    print("Number is a positive even number")
elif number > 0 and number % 2 != 0:
    print("Number is a positive odd number")
elif number < 0 and number % 2 == 0:
    print("Number is a negative even number")
elif number < 0 and number % 2 != 0:
    print("Number is a negative odd number")
else:
    print("Number is zero")