# Error: Prints the highest quantity only, not the product name.

products = {}

for i in range(5):
    name = input("Product: ")
    quantity = int(input("Quantity: "))
    products[name] = quantity

total = sum(products.values())
highest = max(products.values())

print("Total Quantity:", total)

print("Highest Quantity Product:")
print(highest)

search = input("Search: ")

print("Search Result:")

if search in products:
    print(search, ":", products[search])
else:
    print("Product not found")