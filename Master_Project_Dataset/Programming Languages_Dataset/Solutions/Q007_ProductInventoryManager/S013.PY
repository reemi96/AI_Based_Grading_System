# Error: Does not display the search result.

products = {}

for i in range(5):
    name = input("Product: ")
    quantity = int(input("Quantity: "))
    products[name] = quantity

total = sum(products.values())
highest = max(products, key=products.get)

print("Total Quantity:", total)

print("Highest Quantity Product:")
print(highest, ":", products[highest])