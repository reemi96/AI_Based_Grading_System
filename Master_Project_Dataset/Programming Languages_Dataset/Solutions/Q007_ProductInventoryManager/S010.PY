# Correct solution.

products = {}

for i in range(5):
    name = input("Product: ")
    quantity = int(input("Quantity: "))
    products[name] = quantity

total_quantity = sum(products.values())

highest_product = max(products, key=products.get)

search = input("Search: ")

print("Total Quantity:", total_quantity)

print("Highest Quantity Product:")
print(highest_product, ":", products[highest_product])

print("Search Result:")

if search in products.keys():
    print(search, ":", products[search])
else:
    print("Product not found")