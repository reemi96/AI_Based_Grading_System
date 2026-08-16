# Error: Always prints "Product not found" even if the product exists.

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

input("Search: ")

print("Search Result:")
print("Product not found")