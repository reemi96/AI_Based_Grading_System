# Error: Searches in product quantities instead of product names.

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

search = input("Search: ")

print("Search Result:")

if search in products.values():
    print(search)
else:
    print("Product not found")