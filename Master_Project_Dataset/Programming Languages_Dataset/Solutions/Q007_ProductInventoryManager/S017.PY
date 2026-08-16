# Error: Reads only 4 products instead of 5.

products = {}

for i in range(4):
    name = input("Product: ")
    quantity = int(input("Quantity: "))
    products[name] = quantity

total = sum(products.values())

highest = max(products, key=products.get)

print("Total Quantity:", total)

print("Highest Quantity Product:")
print(highest, ":", products[highest])

search = input("Search: ")

print("Search Result:")

if search in products:
    print(search, ":", products[search])
else:
    print("Product not found")