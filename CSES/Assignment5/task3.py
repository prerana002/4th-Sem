import sys

if len(sys.argv) <=2:
    sys.exit("Insufficient arguments provided")
num1 = int(sys.argv[1])
num2 = int(sys.argv[2])

print("Sum is: ",num1+num2)

