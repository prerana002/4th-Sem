n = int(input("Number of items: "))
items = []
for _ in range(n):
    new_item = input("Enter item: ").lower()
    items.append(new_item)

search_item = input("What do you want to search: ").lower()
for index, fruit in enumerate(items):
    if fruit == search_item:
        print(f"'{fruit}' is in {index+1} position")
        break