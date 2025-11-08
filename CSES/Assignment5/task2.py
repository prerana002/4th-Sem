data_dict= {
     "Alice" : 85,
     "Bob" : 90,
     "Charlie" : 78,
     "David" : 92,
}
for key, value in data_dict.items():
    print(key, value)

total = 0
for value in data_dict.values():
    total += value

avg_marks = total / len(data_dict.values())
print(avg_marks)