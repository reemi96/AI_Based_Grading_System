# Error: Total quantity is calculated using only the last product quantity.

products = {}

for i in range(5):
    name = input("Product: ")
    quantity = int(input("Quantity: "))
    products[name] = quantity

total = quantity

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