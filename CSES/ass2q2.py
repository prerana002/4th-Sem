var1 = 10
def vars():
    global var1
    var1 = 20
    var2 = 5
    var1 = var1 + 5
    print("Local variable : ",var2)
print("Global Variable before modifying", var1)
vars()
print("Global Variable after modifying",var1)